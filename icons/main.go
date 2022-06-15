package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"runtime"
	"sync"
	"sync/atomic"
	"time"

	"github.com/schollz/progressbar/v3"
)

var wg sync.WaitGroup
var numRefetches uint64

type Item struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Type        string `json:"type"`
	ID          int64  `json:"id"`
	Icon        string `json:"icon"`
}

func fetch(path string) (*http.Response, error) {
	return http.Get(fmt.Sprintf("https://api.guildwars2.com%s", path))
}

func fetchItemIDs() ([]int64, error) {
	var itemCodes []int64
	resp, err := fetch("/v2/items")
	if err != nil {
		return itemCodes, err
	}
	defer resp.Body.Close()
	err = json.NewDecoder(resp.Body).Decode(&itemCodes)
	return itemCodes, err
}

func fetchItem(ID int64) (Item, error) {
	var item Item
	resp, err := fetch(fmt.Sprintf("/v2/items/%d", ID))
	if err != nil {
		return item, err
	}
	defer resp.Body.Close()
	err = json.NewDecoder(resp.Body).Decode(&item)
	return item, err
}

func overwriteFile(path string, chunks <-chan []byte, done chan<- bool) {
	defer func() { done <- true }()
	file, err := os.OpenFile(path, os.O_CREATE|os.O_WRONLY, fs.ModePerm)
	if err != nil {
		log.Fatalln(err)
	}
	defer file.Close()
	w := bufio.NewWriter(file)
	defer w.Flush()
	for bytes := range chunks {
		_, err := w.Write(bytes)
		if err != nil {
			log.Fatalln(err)
		}
	}
}

func refetchUntilSuccess(ID int64) Item {
	var item Item
	var err error
	for i := int64(0); item.ID == 0; i += 1 {
		if i > 0 {
			backoff := (time.Second * 16) + (time.Second * time.Duration(i*i))
			log.Println("Backing off", backoff, "before retrying ID", ID)
			time.Sleep(backoff)
			atomic.AddUint64(&numRefetches, 1)
		}
		item, err = fetchItem(ID)
		if err != nil {
			log.Println("Request error while fetching item with ID", ID)
			continue
		}
		if item.ID == 0 {
			log.Println("Failed to fetch item with ID", ID)
			continue
		}
	}
	return item
}

func processItems(IDs []int64, chunks chan<- []byte, bar *progressbar.ProgressBar) {
	defer wg.Done()
	for _, ID := range IDs {
		item := refetchUntilSuccess(ID)
		b, err := json.Marshal(&item)
		if err != nil {
			log.Fatalln(err)
		}
		chunks <- append(b, ',', '\n')
		bar.Add(1)
		time.Sleep(time.Second * 5)
	}
}

func main() {
	startTime := time.Now()
	itemIDs, err := fetchItemIDs()
	if err != nil {
		log.Fatalln(err)
	}
	chunks := make(chan []byte, 100)
	writingDone := make(chan bool)

	bar := progressbar.Default(int64(len(itemIDs)))

	go overwriteFile("icons.json", chunks, writingDone)

	chunks <- []byte("[\n")
	numChunks := runtime.NumCPU()
	chunkSize := len(itemIDs) / numChunks
	log.Println("Chunking", len(itemIDs), "IDs into", numChunks, "chunks of", chunkSize, "for processing.")
	for i := 0; i < len(itemIDs); i += chunkSize {
		end := i + chunkSize
		if end > len(itemIDs) {
			end = len(itemIDs)
		}
		wg.Add(1)
		go processItems(itemIDs[i:end], chunks, bar)
	}
	wg.Wait()
	log.Println("Finishing up...")
	time.Sleep(time.Second * 5)
	chunks <- []byte("\n]")
	close(chunks)
	<-writingDone
	timeTaken := time.Now().Sub(startTime)
	log.Println("Completed | Total:", len(itemIDs), "| Refetches:", numRefetches, "| Duration:", timeTaken)
}
