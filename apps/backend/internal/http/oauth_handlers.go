package http

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/rs/zerolog/log"
	"golang.org/x/oauth2"
)

func registerDiscordOAuthHandlers(cfg Config, r gin.IRouter) {
	if cfg.DiscordClientID == "" || cfg.DiscordClientSecret == "" || cfg.DiscordRedirectURI == "" {
		log.Warn().Msg("Discord OAuth is not configured")
		g := r.Group("/discord")
		g.GET("/login", func(ctx *gin.Context) {
			ctx.AbortWithStatusJSON(http.StatusNotImplemented, gin.H{"error": "Discord OAuth is not configured"})
		})
		g.GET("/callback", func(ctx *gin.Context) {
			ctx.AbortWithStatusJSON(http.StatusNotImplemented, gin.H{"error": "Discord OAuth is not configured"})
		})
		return
	}
	oauthCfg := &oauth2.Config{
		ClientID:     cfg.DiscordClientID,
		ClientSecret: cfg.DiscordClientSecret,
		RedirectURL:  cfg.DiscordRedirectURI,
		Endpoint: oauth2.Endpoint{
			AuthURL:  "https://discord.com/oauth2/authorize",
			TokenURL: "https://discord.com/api/oauth2/token",
		},
		Scopes: []string{
			"identify",
		},
	}
	g := r.Group("/discord")
	g.Use(func(ctx *gin.Context) {
		ctx.Header("Cache-Control", "no-store no-cache must-revalidate")
		ctx.Header("Pragma", "no-cache")
		ctx.Next()
	})
	g.GET("/login", func(ctx *gin.Context) {
		state := uuid.New().String()
		url := oauthCfg.AuthCodeURL(state)
		ctx.SetCookie("discord_oauth_state", state, int(5*time.Minute), "", "", true, true)
		ctx.Redirect(http.StatusFound, url)
	})
	g.GET("/callback", func(ctx *gin.Context) {
		incomingState := ctx.Query("state")
		storedState, err := ctx.Cookie("discord_oauth_state")
		if err != nil {
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "missing state cookie"})
			return
		}
		if incomingState != storedState {
			log.Err(err).
				Str("storedState", storedState).
				Str("incomingState", incomingState).
				Msg("state mismatch")
			ctx.AbortWithStatusJSON(http.StatusConflict, gin.H{"error": "state mismatch"})
			return
		}
		code := ctx.Query("code")
		tkn, err := oauthCfg.Exchange(ctx, code)
		if err != nil {
			log.Err(err).Msg("failed to exchange code for token")
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to exchange code for token"})
			return
		}
		ctx.SetCookie("discord_access_token", tkn.AccessToken, int(time.Until(tkn.Expiry)), "", "", true, true)
		ctx.SetCookie("discord_refresh_token", tkn.RefreshToken, int(time.Until(tkn.Expiry)), "", "", true, true)
		ctx.Redirect(http.StatusFound, "https://web.quest.local")
	})
}
