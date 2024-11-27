package storage

import (
	"context"
	"fmt"

	"github.com/arangodb/go-driver/v2/arangodb"
	"github.com/arangodb/go-driver/v2/connection"
)

const (
	DefaultDBName = "_system"
)

type ArangoDB struct {
	client arangodb.Client
	db     arangodb.Database
}

type ArangoDBConfig struct {
	Username  string
	Password  string
	Endpoints []string
}

func NewArangoDB(ctx context.Context, cfg ArangoDBConfig) (*ArangoDB, error) {
	endpoint := connection.NewRoundRobinEndpoints(cfg.Endpoints)
	conn := connection.NewHttp2Connection(connection.DefaultHTTP2ConfigurationWrapper(endpoint, true))

	auth := connection.NewBasicAuth(cfg.Username, cfg.Password)
	err := conn.SetAuthentication(auth)
	if err != nil {
		return nil, err
	}

	client := arangodb.NewClient(conn)

	db, err := client.Database(ctx, DefaultDBName)
	if err != nil {
		return nil, err
	}

	return &ArangoDB{
		client: client,
		db:     db,
	}, nil
}

func (a *ArangoDB) Foo(ctx context.Context) ([]interface{}, error) {
	options := arangodb.QueryOptions{
		Count: true,
		BindVars: map[string]interface{}{
			"limit":  10,
			"offset": 0,
		},
	}

	query := "FOR q IN quests LIMIT @offset, @limit  RETURN q"
	cursor, err := a.db.Query(ctx, query, &options)
	if err != nil {
		return []interface{}{}, err
	}
	defer cursor.Close()
	fmt.Printf("Query yields %d documents\n", cursor.Count())

	docs := make([]interface{}, cursor.Count())
	for i := 0; cursor.HasMore(); i++ {
		_, err := cursor.ReadDocument(ctx, &docs[i])
		if err != nil {
			return docs, err
		}
	}
	return docs, nil
}

func (a *ArangoDB) ListQuestsWithBasicInfo(ctx context.Context, limit, offset int) ([]QuestWithLinkedCharacters, error) {
	options := arangodb.QueryOptions{
		Count: true,
		BindVars: map[string]interface{}{
			"limit":  limit,
			"offset": offset,
		},
	}

	query := `
LET paginatedQuests = (
  FOR q IN quests
    LIMIT @offset, @limit
    RETURN q
)

LET questsWithLinkedCharacters = (
  FOR quest IN paginatedQuests
    LET linkedCharacters = (
      FOR edge IN quest_character_edges
        FILTER edge._from == quest._id
        LET character = DOCUMENT(edge._to)
        RETURN MERGE(
          KEEP(character, "name", "avatar"),
          KEEP(edge, "role", "objective_type")
        )
    )
    RETURN MERGE(
      quest, {
      characters: linkedCharacters
    })
)

FOR q in questsWithLinkedCharacters
  RETURN q
`

	cursor, err := a.db.Query(ctx, query, &options)
	if err != nil {
		return []QuestWithLinkedCharacters{}, err
	}
	defer cursor.Close()

	docs := make([]QuestWithLinkedCharacters, cursor.Count())
	for i := 0; cursor.HasMore(); i++ {
		_, err := cursor.ReadDocument(ctx, &docs[i])
		if err != nil {
			return docs, err
		}
	}
	return docs, nil
}
