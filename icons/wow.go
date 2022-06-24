package main

import (
	"bufio"
	"context"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"regexp"
	"time"

	"github.com/FuzzyStatic/blizzard/v3"
	"github.com/FuzzyStatic/blizzard/wowgd"
)

var nameRegexp = regexp.MustCompile("^.+\\/(?:inv_)?(([a-z]+).+)?\\..+$")

func main() {
	scrape("spell")
	scrape("item")
}

func scrape(tag string) {
	log.Println("[INIT]", tag)
	ctx := context.Background()
	blizz, err := blizzard.NewClient(blizzard.Config{
		ClientID:     "e14f9cf329764c849d302224551cfe86",
		ClientSecret: "OodFAdiI02NL0FiYtejmctWEAmn49DZg",
		HTTPClient:   http.DefaultClient,
		Region:       blizzard.EU,
		Locale:       blizzard.EnGB,
	})
	if err != nil {
		log.Fatalln(err)
	}

	err = blizz.AccessTokenRequest(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	file, err := os.OpenFile(fmt.Sprintf("%s.json", tag), os.O_CREATE|os.O_WRONLY, fs.ModePerm)
	if err != nil {
		log.Fatalln(err)
	}
	defer file.Close()
	w := bufio.NewWriter(file)
	defer w.Flush()

	search := func(tags string, page int) (*wowgd.MediaSearch, error) {
		dat, _, err := blizz.WoWMediaSearch(ctx, tags, "id", page)
		return dat, err
	}
	act := func(tags string, page int) (*wowgd.MediaSearch, error) {
		dat, err := search(tags, page)
		if err != nil {
			return dat, err
		}
		for _, result := range dat.Results {
			if len(result.Data.Assets) == 0 {
				continue
			}
			match := nameRegexp.FindStringSubmatch(result.Data.Assets[0].Value)
			if len(match) != 3 {
				log.Fatalf("[FAIL] Asset URL did not match regex! %+v\n", match)
			}
			_, err := w.Write([]byte(fmt.Sprintf("{\"name\":\"%s\",\"type\": \"%s\",\"url\":\"%s\"},\n", match[1], match[2], match[0])))
			if err != nil {
				return dat, err
			}
		}
		return dat, nil
	}

	log.Println("[START]", tag)
	w.Write([]byte("[\n"))
	defer w.Write([]byte("\n]"))
	defer log.Println("[END]", tag)
	dat, err := act(tag, 0)
	if err != nil {
		log.Fatalln(err)
	}
	for i := 1; dat.PageSize > 0; i += 1 {
		time.Sleep(time.Millisecond * 100)
		dat, err = act(tag, i)
		if err != nil {
			log.Fatalln("\t[FAIL]", err)
		}
		log.Printf("\t[OK] Page %d | Size: %d\n", dat.Page, dat.PageCount)
	}
}
