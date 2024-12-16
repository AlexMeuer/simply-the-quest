package http

import (
	"net/http"

	"alexmeuer.com/simply-the-quest/internal/storage"
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/rs/zerolog/log"
)

// This file was created before the handlers subpackages was created.
// Avoid creating new handlers in this file please.

type LimitOffset struct {
	Limit  int `form:"limit"`
	Offset int `form:"offset"`
}

func LimitOffsetFrom(ctx *gin.Context) LimitOffset {
	var limitOffset LimitOffset
	if err := ctx.ShouldBindWith(&limitOffset, binding.Query); err != nil {
		log.Warn().Err(err).Msg("failed to bind limit and offset")
	}
	if limitOffset.Limit == 0 {
		limitOffset.Limit = 10
	}
	return limitOffset
}

// @Summary Send Ping, get Pong
// @Accept  text/plain; charset=utf-8
// @Produce  text/plain; charset=utf-8
// @Success 200 {string} PONG
// @Router /ping [get]
func pingHandler(ctx *gin.Context) {
	ctx.Header("Cache-Control", "no-cache, no-store, must-revalidate")
	ctx.String(http.StatusOK, "PONG")
}

func withArangoDB(handler func(ctx *gin.Context, db *storage.ArangoDB)) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		db, err := arangoDBFromMiddleware(ctx)
		if err != nil {
			log.Error().Err(err).Msg("failed to get arangoDB from middleware")
			ctx.AbortWithStatus(http.StatusInternalServerError)
			return
		}
		handler(ctx, db)
	}
}

func foo(ctx *gin.Context, db *storage.ArangoDB) {
	docs, err := db.Foo(ctx)
	if err != nil {
		log.Error().Err(err).Msg("failed to execute Foo")
		ctx.AbortWithStatus(http.StatusInternalServerError)
		return
	}
	ctx.JSON(http.StatusOK, docs)
}

// @Summary      List quests
// @Description  Gets a page of quests with basic relations
// @Tags         quests
// @Accept       json
// @Produce      json
// @Param        limit query     int     false  "limit"  Format(int) default(10) minimum(1) maximum(100)
// @Param        offset query     int     false  "offset"  Format(int) default(0)
// @Success      200  {array}   storage.QuestWithLinkedCharacters
// @Router       /quests [get]
func listQuestsWithBasicInfo(ctx *gin.Context, db *storage.ArangoDB) {
	pagination := LimitOffsetFrom(ctx)

	quests, err := db.ListQuestsWithBasicInfo(ctx, pagination.Limit, pagination.Offset)
	if err != nil {
		log.Error().Err(err).Msg("failed to execute ListQuestsWithBasicInfo")
		ctx.AbortWithStatus(http.StatusInternalServerError)
		return
	}
	ctx.JSON(http.StatusOK, quests)
}

// @Summary      Quest details
// @Description  Gets details of a quest
// @Tags         quests
// @Accept       json
// @Produce      json
// @Param        id path     string     true  "quest id"
// @Success      200  {array}   storage.QuestDetail
// @Router       /quests/:id [get]
func getQuestByID(ctx *gin.Context, db *storage.ArangoDB) {
	id := ctx.Param("id")
	quest, err := db.QuestDetail(ctx, id)
	if err != nil {
		log.Error().Err(err).Msg("failed to execute QuestDetail")
		ctx.AbortWithStatus(http.StatusInternalServerError)
		return
	}
	ctx.JSON(http.StatusOK, quest)
}
