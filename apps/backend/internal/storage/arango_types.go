package storage

type QuestWithLinkedCharacters struct {
	ID         string `json:"_id"`
	Key        string `json:"_key"`
	Body       string `json:"body"`
	Title      string `json:"title"`
	Characters []struct {
		Avatar        *Avatar `json:"avatar,omitempty"`
		Name          string  `json:"name"`
		Role          string  `json:"role"`
		ObjectiveType *string `json:"objective_type,omitempty"`
	} `json:"characters"`
	Images QuestImages `json:"images"`
}

type QuestImages struct {
	Banner string `json:"banner"`
}

type Avatar struct {
	Small  string `json:"sm"`
	Medium string `json:"md"`
	Raw    string `json:"raw"`
}

type QuestDetail struct {
	ID         string                      `json:"_id"`
	Key        string                      `json:"_key"`
	Rev        string                      `json:"_rev"`
	Body       string                      `json:"body"`
	Images     QuestImages                 `json:"images"`
	Title      string                      `json:"title"`
	Characters []CharacterWithRelationInfo `json:"characters"`
	Notes      []Note                      `json:"notes"`
	Children   []ChildQuest                `json:"children"`
}

type CharacterWithRelationInfo struct {
	ID       string   `json:"_id"`
	Aliases  []string `json:"aliases"`
	Avatar   Avatar   `json:"avatar"`
	Bio      string   `json:"bio"`
	Name     string   `json:"name"`
	Race     string   `json:"race"`
	Relation struct {
		Role          string  `json:"role"`
		ObjectiveType *string `json:"objective_type,omitempty"`
	} `json:"relation"`
	Class *string `json:"class,omitempty"`
}

type ChildQuest struct {
	ID     string      `json:"_id"`
	Key    string      `json:"_key"`
	Body   string      `json:"body"`
	Images QuestImages `json:"images"`
	Title  string      `json:"title"`
}

type Note struct {
	ID       string                 `json:"_id"`
	Body     string                 `json:"body"`
	Relation map[string]interface{} `json:"relation"`
	Title    string                 `json:"title"`
}
