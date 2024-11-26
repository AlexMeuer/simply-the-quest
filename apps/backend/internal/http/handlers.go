package http

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog/log"
)

func pingHandler(ctx *gin.Context) {
	ctx.Header("Cache-Control", "no-cache, no-store, must-revalidate")
	ctx.String(http.StatusOK, "PONG")
}

func foo(ctx *gin.Context) {
	db, err := arangoDBFromMiddleware(ctx)
	if err != nil {
		log.Error().Err(err).Msg("failed to get arangoDB from middleware")
		ctx.AbortWithStatus(http.StatusInternalServerError)
		return
	}
	docs, err := db.Foo(ctx)
	if err != nil {
		log.Error().Err(err).Msg("failed to execute Foo")
		ctx.AbortWithStatus(http.StatusInternalServerError)
		return
	}
	ctx.JSON(http.StatusOK, docs)
}
