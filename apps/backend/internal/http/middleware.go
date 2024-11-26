package http

import (
	"errors"
	"net/http"

	"alexmeuer.com/simply-the-quest/internal/storage"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog/log"
)

func newCorsMiddleware(cfg Config) gin.HandlerFunc {
	c := cors.DefaultConfig()
	c.AllowCredentials = true
	if len(cfg.AllowedOrigins) > 0 {
		c.AllowOrigins = cfg.AllowedOrigins
	} else {
		c.AllowAllOrigins = true
	}
	return cors.New(c)
}

func newArangoDBMiddleware(cfg Config) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		db, err := storage.NewArangoDB(ctx, storage.ArangoDBConfig{
			Username:  cfg.ArangoDBUser,
			Password:  cfg.ArangoDBPass,
			Endpoints: []string{cfg.ArangoDBHost},
		})
		if err != nil {
			log.Error().Err(err).Msg("failed to create arangodb client")
			ctx.AbortWithStatus(http.StatusInternalServerError)
			return
		}
		ctx.Set("arangodb", db)
		ctx.Next()
	}
}

func arangoDBFromMiddleware(ctx *gin.Context) (*storage.ArangoDB, error) {
	untyped, ok := ctx.Get("arangodb")
	if !ok {
		return nil, errors.New("arangodb not found in context")
	}
	typed, ok := untyped.(*storage.ArangoDB)
	if !ok {
		return nil, errors.New("arangodb has wrong type in context")
	}
	return typed, nil
}
