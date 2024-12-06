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

	cfg.ArangoDBPass, err = extractIfFile(cfg.ArangoDBPass)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to read arangodb password")
	}

	cfg.JWTAccessTokenSecret, err = extractIfFile(cfg.JWTAccessTokenSecret)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to read jwt access token secret")
	}

	cfg.JWTRefreshTokenSecret, err = extractIfFile(cfg.JWTRefreshTokenSecret)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to read jwt refresh token secret")
	}

	if err := http.Serve(cfg); err != nil {
		log.Fatal().Err(err).Msg("server failed")
	}
}

/**
 * extractIfFile reads the file at the given path and returns its contents if it exists.
 */
func extractIfFile(path string) (string, error) {
	// Return early if the path does not exist.
	// This is not considered an error.
	if _, err := os.Stat(path); err != nil {
		log.Debug().Err(err).Str("path", path).Msg("path does not exist")
		return path, nil
	}
	val, err := os.ReadFile(path)
	if err != nil {
		// The file exists but we cannot read it.
		return path, err
	}
	return strings.TrimSuffix(string(val), "\n"), nil
}
