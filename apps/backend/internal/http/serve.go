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
	Port           uint16   `env:"PORT" envDefault:"8080"`
	AllowedOrigins []string `env:"CORS_ALLOWED_ORIGINS"`
	ArangoDBUser   string   `env:"ARANGODB_USER,required"`
	ArangoDBPass   string   `env:"ARANGODB_PASS,required"`
	ArangoDBHost   string   `env:"ARANGODB_HOST,required"`
	TrustedProxies []string `env:"TRUSTED_PROXIES"`
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

	v1 := r.Group("", newArangoDBMiddleware(cfg))
	v1.GET("/foo", withArangoDB(foo))
	v1.GET("/quests", withArangoDB(listQuestsWithBasicInfo))
	v1.GET("/quests/:id", withArangoDB(getQuestByID))

	log.Info().Msgf("Starting server on port %d", cfg.Port)
	return r.Run(fmt.Sprintf(":%d", cfg.Port))
}
