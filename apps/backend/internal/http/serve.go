package http

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

type Config struct {
	Port           uint16   `env:"PORT" envDefault:"8080"`
	AllowedOrigins []string `env:"CORS_ALLOWED_ORIGINS"`
	ArangoDBUser   string   `env:"ARANGODB_USER,required"`
	ArangoDBPass   string   `env:"ARANGODB_PASS,required"`
	ArangoDBHost   string   `env:"ARANGODB_HOST,required"`
}

func Serve(cfg Config) error {
	r := gin.Default()
	r.Use(newCorsMiddleware(cfg))
	r.Use(newArangoDBMiddleware(cfg))

	r.GET("/ping", pingHandler)
	r.HEAD("/ping", pingHandler)
	r.GET("/foo", withArangoDB(foo))
	r.GET("/quests", withArangoDB(listQuestsWithBasicInfo))
	r.GET("/quests/:id", withArangoDB(getQuestByID))

	return r.Run(fmt.Sprintf(":%d", cfg.Port))
}
