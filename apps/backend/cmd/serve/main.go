package main

import (
	"os"
	"strings"

	"alexmeuer.com/simply-the-quest/internal/http"
	"github.com/caarlos0/env/v11"
	"github.com/joho/godotenv"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

func main() {
	zerolog.TimeFieldFormat = zerolog.TimeFormatUnix

	err := godotenv.Load(".env")
	if err != nil {
		log.Debug().Err(err).Msg("failed to load .env file")
	}

	var cfg http.Config
	if err := env.Parse(&cfg); err != nil {
		log.Fatal().Err(err).Msg("failed to parse config")
	}

	// Check if cfg.ArangoPassword exists as a file
	if _, err := os.Stat(cfg.ArangoDBPass); err == nil {
		// Read the password from the file
		password, err := os.ReadFile(cfg.ArangoDBPass)
		if err != nil {
			log.Fatal().Err(err).Msg("failed to read ArangoDB password from file")
		}
		cfg.ArangoDBPass = strings.TrimSuffix(string(password), "\n")
	}

	if err := http.Serve(cfg); err != nil {
		log.Fatal().Err(err).Msg("server failed")
	}
}
