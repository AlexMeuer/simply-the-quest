package http

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"alexmeuer.com/simply-the-quest/internal/user"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/rs/zerolog/log"
	"golang.org/x/oauth2"
)

type DiscordUser struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Avatar   string `json:"avatar"`
}

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

		db, err := arangoDBFromMiddleware(ctx)
		if err != nil {
			log.Err(err).Msg("failed to get ArangoDB from middleware")
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to get DB connection"})
			return
		}
		tknGen, err := tknCfgFromMiddleware(ctx)
		if err != nil {
			log.Err(err).Msg("failed to get token generator from middleware")
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to get token generator"})
			return
		}

		code := ctx.Query("code")
		tkn, err := oauthCfg.Exchange(ctx, code)
		if err != nil {
			log.Err(err).Msg("failed to exchange code for token")
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to exchange code for token"})
			return
		}

		// Get user data from Discord
		req, err := http.NewRequest("GET", "https://discord.com/api/users/@me", nil)
		if err != nil {
			log.Err(err).Msg("failed to create Discord API request")
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to create Discord API request"})
			return
		}
		req.Header.Set("Authorization", "Bearer "+tkn.AccessToken)
		req.Header.Set("User-Agent", "SimplyTheQuest (https://api.quest.local, 1.0)")
		req.Header.Set("Content-Type", "application/json")
		req.Header.Set("Accept", "application/json")

		resp, err := http.DefaultClient.Do(req)
		if err != nil {
			log.Err(err).Msg("failed to execute Discord API request")
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to execute Discord API request"})
			return
		}
		// We're reading and unmarshalling the response body seperately
		// so that we can log the body later in the case of an error.
		defer resp.Body.Close()
		body, err := io.ReadAll(resp.Body)
		if err != nil {
			log.Err(err).Msg("failed to read Discord API response")
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to read Discord API response"})
			return
		}
		var discordUser DiscordUser
		if err = json.Unmarshal(body, &discordUser); err != nil {
			log.Err(err).Str("response body", string(body)).Msg("failed to read Discord API response")
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to read Discord API response"})
			return
		}
		if discordUser.Username == "" {
			log.Err(err).Str("response body", string(body)).Msg("invalid Discord API response")
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "invalid Discord API response"})
			return
		}

		u, err := db.RetrieveUser(ctx, discordUser.Username)
		if err != nil {
			log.Info().Err(err).Str("username", discordUser.Username).Msg("user not found, creating new user")
			u = user.Model{
				Username:  discordUser.Username,
				AvatarURL: fmt.Sprintf("https://cdn.discordapp.com/avatars/%s/%s.webp", discordUser.ID, discordUser.Avatar),
				Role:      "PLAYER",
			}
			if err = db.CreateUser(ctx, u); err != nil {
				log.Err(err).Interface("user", u).Msg("failed to create user")
				ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to create user"})
				return
			}
		}

		accessTkn, err := tknGen.GenerateAccessToken(u.Username, u.Role)
		if err != nil {
			log.Err(err).Interface("user", u).Msg("failed to generate access token")
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to generate access token"})
		}

		refreshTkn, err := tknGen.GenerateRefreshToken(u.Username, u.Role)
		if err != nil {
			log.Err(err).Interface("user", u).Msg("failed to generate refresh token")
			ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to generate refresh token"})
		}

		ctx.SetCookie("access_token", accessTkn.SignedString, int(accessTkn.Claims.ExpiresAt.Unix()), "/", tknGen.Domain, true, true)
		ctx.SetCookie("refresh_token", refreshTkn.SignedString, int(refreshTkn.Claims.ExpiresAt.Unix()), "/", tknGen.Domain, true, true)
		ctx.Redirect(http.StatusFound, "https://web.quest.local")
	})
}
