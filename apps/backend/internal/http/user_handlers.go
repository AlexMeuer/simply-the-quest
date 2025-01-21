package http

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog/log"
)

func getUserSelf(ctx *gin.Context) {
	db, err := arangoDBFromMiddleware(ctx)
	if err != nil {
		log.Err(err).Msg("failed to get ArangoDB from middleware")
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "internal server error"})
		return
	}
	claims, err := loggedInUserClaimsFromMiddleware(ctx)
	if err != nil {
		log.Err(err).Msg("failed to get user claims from middleware")
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}
	u, err := db.RetrieveUser(ctx, claims.Subject)
	if err != nil {
		log.Err(err).Msg("failed to retrieve user")
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "internal server error"})
		return
	}
	ctx.JSON(http.StatusOK, u)
}

func refreshUser(ctx *gin.Context) {
	ctx.JSON(501, gin.H{"message": "not implemented"})
}

func logoutUser(ctx *gin.Context) {
	tknGen, err := tknCfgFromMiddleware(ctx)
	if err != nil {
		log.Err(err).Msg("failed to get token generator from middleware")
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "internal server error"})
		return
	}
	ctx.SetCookie("access_token", "", 0, "/", tknGen.Domain, true, true)
	ctx.SetCookie("refresh_token", "", 0, "/", tknGen.Domain, true, true)
	ctx.Status(http.StatusOK)
}
