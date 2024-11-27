package storage

type QuestWithLinkedCharacters struct {
	ID         string      `json:"_id"`
	Key        string      `json:"_key"`
	Body       string      `json:"body"`
	Title      string      `json:"title"`
	Characters []Character `json:"characters"`
	Images     struct {
		Banner string `json:"banner"`
	} `json:"images"`
}

type Character struct {
	Avatar        *Avatar `json:"avatar,omitempty"`
	Name          string  `json:"name"`
	Role          string  `json:"role"`
	ObjectiveType *string `json:"objective_type,omitempty"`
}

type Avatar struct {
	Small  string `json:"sm"`
	Medium string `json:"md"`
	Raw    string `json:"raw"`
}
