package http

import (
	"errors"
	"net/http"
	"time"

	"alexmeuer.com/simply-the-quest/internal/storage"
	"alexmeuer.com/simply-the-quest/pkg/jwt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog/log"
)

const ContextKeyLoggedInUserClaims = "LoggedInUserClaims"

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

func newTokenMiddleware(config Config) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		cfg := &jwt.Config{
			AccessTokenSecret:  []byte(config.JWTAccessTokenSecret),
			RefreshTokenSecret: []byte(config.JWTRefreshTokenSecret),
			AccessTokenTTL:     1 * time.Hour,
			RefreshTokenTTL:    30 * 24 * time.Hour,
			Domain:             config.JWTDomain,
		}
		ctx.Set("tokenConfig", cfg)

		accessTkn, _ := ctx.Cookie("access_token")
		refreshTkn, _ := ctx.Cookie("refresh_token")
		// If we have an access token,
		// try to verify it.
		// If it's invalid,
		// try to verify the refresh token.
		// If the refresh token is valid,
		// issue new tokens.
		// Otherwise, the user is not logged in.
		if accessTkn != "" {
			claims, err := cfg.VerifyAccessToken(accessTkn)
			if err == nil {
				ctx.Set(ContextKeyLoggedInUserClaims, claims)
			} else {
				log.Info().Err(err).Interface("tkn", accessTkn).Msg("failed to verify access token, will attempt to refresh")
				if claims, err = refreshTokens(ctx, cfg, refreshTkn); err == nil {
					ctx.Set(ContextKeyLoggedInUserClaims, claims)
				}
			}
		}

		ctx.Next()
	}
}

func tknCfgFromMiddleware(ctx *gin.Context) (*jwt.Config, error) {
	untyped, ok := ctx.Get("tokenConfig")
	if !ok {
		return nil, errors.New("token config not found in context")
	}
	typed, ok := untyped.(*jwt.Config)
	if !ok {
		return nil, errors.New("token config has wrong type in context")
	}
	return typed, nil
}

func requireLoggedInUserMiddleware(ctx *gin.Context) {
	cookie, err := ctx.Cookie("access_token")
	if err != nil {
		log.Error().Err(err).Msg("failed to get access token from cookie")
		ctx.AbortWithStatus(http.StatusUnauthorized)
		return
	}
	tknCfg, err := tknCfgFromMiddleware(ctx)
	if err != nil {
		log.Error().Err(err).Msg("failed to get token config from middleware")
		ctx.AbortWithStatus(http.StatusInternalServerError)
		return
	}
	if _, err := tknCfg.VerifyAccessToken(cookie); err != nil {
		log.Error().Err(err).Msg("failed to verify access token")
		ctx.AbortWithStatus(http.StatusForbidden)
		return
	}
}

func loggedInUserClaimsFromMiddleware(ctx *gin.Context) (jwt.CustomClaims, error) {
	untyped, ok := ctx.Get(ContextKeyLoggedInUserClaims)
	if !ok {
		return jwt.CustomClaims{}, errors.New("logged in user claims not found in context")
	}
	typed, ok := untyped.(jwt.CustomClaims)
	if !ok {
		return jwt.CustomClaims{}, errors.New("logged in user claims has wrong type in context")
	}
	return typed, nil
}

// refreshTokens checks if the refresh token is valid and generates new tokens if it is.
// The new tokens will be set as cookies on the context.
func refreshTokens(ctx *gin.Context, cfg *jwt.Config, refreshTkn string) (jwt.CustomClaims, error) {
	claims, err := cfg.VerifyRefreshToken(refreshTkn)
	if err != nil {
		log.Err(err).Msg("failed to verify refresh token")
		return jwt.CustomClaims{}, err
	}

	newAccessTkn, err := cfg.GenerateAccessToken(claims.Subject, claims.Role)
	if err != nil {
		log.Err(err).Interface("claims", claims).Msg("failed to generate access token")
		return newAccessTkn.Claims, err
	}

	newRefreshTkn, err := cfg.GenerateRefreshToken(claims.Subject, claims.Role)
	if err != nil {
		log.Err(err).Interface("claims", claims).Msg("failed to generate refresh token")
		return newAccessTkn.Claims, err
	}

	ctx.SetCookie("access_token", newAccessTkn.SignedString, int(newAccessTkn.Claims.ExpiresAt.Unix()), "", cfg.Domain, true, true)
	ctx.SetCookie("refresh_token", newRefreshTkn.SignedString, int(newRefreshTkn.Claims.ExpiresAt.Unix()), "", cfg.Domain, true, true)
	return newAccessTkn.Claims, nil
}
