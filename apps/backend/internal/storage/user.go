package storage

import (
	"context"
	"errors"
	"fmt"
	"strings"

	"alexmeuer.com/simply-the-quest/internal/user"
	"github.com/arangodb/go-driver/v2/arangodb"
)

var (
	ErrUserExists   = errors.New("user already exists")
	ErrUserNotFound = errors.New("user not found")
)

func (a *ArangoDB) RetrieveUser(ctx context.Context, username string) (user.Model, error) {
	options := arangodb.QueryOptions{
		BindVars: map[string]interface{}{
			"id": strings.ToLower(username),
		},
	}

	cursor, err := a.db.Query(ctx, `RETURN DOCUMENT(CONCAT("users/", @id))`, &options)
	if err != nil {
		return user.Model{}, err
	}
	defer cursor.Close()
	var u user.Model
	_, err = cursor.ReadDocument(ctx, &u)
	if err == nil && u.Username == "" {
		err = ErrUserNotFound
	}
	return u, err
}

func (a *ArangoDB) CreateUser(ctx context.Context, u user.Model) error {
	_, err := a.RetrieveUser(ctx, u.Username)
	if err == nil {
		return ErrUserExists
	}

	col, err := a.db.Collection(ctx, "users")
	if err != nil {
		return err
	}
	key := strings.ToLower(u.Username)
	_, err = col.CreateDocument(ctx, map[string]interface{}{
		"_key":       key,
		"_id":        fmt.Sprintf("users/%s", key),
		"username":   u.Username,
		"avatar_url": u.AvatarURL,
		"role":       u.Role,
	})
	return err
}
