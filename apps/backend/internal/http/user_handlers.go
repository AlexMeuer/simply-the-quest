package http

import (
	"net/http"

	"alexmeuer.com/simply-the-quest/internal/user"
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog/log"
)

type LoginPayload struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type RegistrationPayload struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func loginUser(ctx *gin.Context) {
	var payload LoginPayload
	if err := ctx.ShouldBindJSON(&payload); err != nil {
		ctx.JSON(400, gin.H{"message": err.Error()})
		return
	}
	db, err := arangoDBFromMiddleware(ctx)
	if err != nil {
		log.Error().Err(err).Msg("failed to get arangodb from middleware")
		ctx.AbortWithStatus(http.StatusInternalServerError)
		return
	}
	tknGen, err := tknGenFromMiddleware(ctx)
	if err != nil {
		log.Error().Err(err).Msg("failed to get token generator from middleware")
		ctx.AbortWithStatus(http.StatusInternalServerError)
		return
	}

	result, err := user.Login(ctx, db, tknGen, payload.Username, payload.Password)
	if err != nil {
		// TODO: Better error handling
		ctx.JSON(400, gin.H{"message": err.Error()})
		return
	}
	result.User.HashedPassword = ""

	ctx.SetCookie("access_token", result.AccessToken, int(tknGen.AccessTokenTTL.Milliseconds()), "/", tknGen.Domain, true, true)

	ctx.SetCookie("refresh_token", result.RefreshToken, int(tknGen.RefreshTokenTTL.Milliseconds()), "/", tknGen.Domain, true, true)

	ctx.JSON(200, result.User)
}

func registerUser(ctx *gin.Context) {
	var payload LoginPayload
	if err := ctx.ShouldBindJSON(&payload); err != nil {
		ctx.JSON(400, gin.H{"message": err.Error()})
		return
	}
	db, err := arangoDBFromMiddleware(ctx)
	if err != nil {
		log.Error().Err(err).Msg("failed to get arangodb from middleware")
		ctx.AbortWithStatus(http.StatusInternalServerError)
		return
	}

	result, err := user.Register(ctx, db, payload.Username, payload.Password)
	if err != nil {
		// TODO: Better error handling
		ctx.JSON(400, gin.H{"message": err.Error()})
		return
	}

	ctx.JSON(http.StatusCreated, result)
}

func refreshUser(ctx *gin.Context) {
	ctx.JSON(501, gin.H{"message": "not implemented"})
}

func logoutUser(ctx *gin.Context) {
	ctx.JSON(501, gin.H{"message": "not implemented"})
}
