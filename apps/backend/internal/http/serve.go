package http

import (
	"fmt"

	_ "alexmeuer.com/simply-the-quest/api"
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog/log"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

type Config struct {
	Port                  uint16   `env:"PORT" envDefault:"8080"`
	AllowedOrigins        []string `env:"CORS_ALLOWED_ORIGINS"`
	ArangoDBUser          string   `env:"ARANGODB_USER,required"`
	ArangoDBPass          string   `env:"ARANGODB_PASS,required"`
	ArangoDBHost          string   `env:"ARANGODB_HOST,required"`
	TrustedProxies        []string `env:"TRUSTED_PROXIES"`
	JWTAccessTokenSecret  string   `env:"JWT_ACCESS_TOKEN_SECRET,required"`
	JWTRefreshTokenSecret string   `env:"JWT_REFRESH_TOKEN_SECRET,required"`
	JWTDomain             string   `env:"JWT_DOMAIN,required"`
}

//go:generate swag init --parseDependency  --parseInternal -g serve.go -o ../../api

// @title           Simply-the-Quest HTTP API
// @version         1.0
// @description     This relies on an ArangoDB database for most operations.

// @contact.name   Alex Meuer
// @contact.email  alex@alexmeuer.com

// @host      localhost:8080
// @BasePath  /

func Serve(cfg Config) error {
	r := gin.Default()
	if len(cfg.TrustedProxies) > 0 {
		if err := r.SetTrustedProxies(cfg.TrustedProxies); err != nil {
			log.
				Err(err).
				Strs("trusted-proxies", cfg.TrustedProxies).
				Msg("failed to set trusted proxies, will trust all!")
		}
	}
	r.Use(newCorsMiddleware(cfg))

	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))
	r.GET("/ping", pingHandler)

	g := r.Group("", newArangoDBMiddleware(cfg))
	g.GET("/foo", withArangoDB(foo))
	g.GET("/quests", withArangoDB(listQuestsWithBasicInfo))
	g.GET("/quests/:id", withArangoDB(getQuestByID))

	userRoutes := g.Group("/user", newTokenGeneratorMiddleware(cfg))
	userRoutes.POST("/login", loginUser)
	userRoutes.POST("/register", registerUser)
	userRoutes.POST("/refresh", refreshUser)
	userRoutes.POST("/logout", logoutUser)

	log.Info().Msgf("Starting server on port %d", cfg.Port)
	return r.Run(fmt.Sprintf(":%d", cfg.Port))
}
