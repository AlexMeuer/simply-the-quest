package user

import (
	"context"
	"errors"

	"github.com/rs/zerolog/log"
	"golang.org/x/crypto/bcrypt"
)

type LoginResult struct {
	User         Model
	AccessToken  string
	RefreshToken string
}

type TokenGenerator interface {
	GenerateAccessToken(userID, role string) (string, error)
	GenerateRefreshToken(userID string) (string, error)
}

type UserRetriever interface {
	RetrieveUser(ctx context.Context, username string) (Model, error)
}

type UserCreator interface {
	CreateUser(ctx context.Context, user Model) error
}

var (
	ErrInvalidCredentials = errors.New("invalid username or password")
	ErrUserNotFound       = errors.New("user not found")
)

func Login(ctx context.Context, userRetriever UserRetriever, tknGen TokenGenerator, username, password string) (LoginResult, error) {
	u, err := userRetriever.RetrieveUser(ctx, username)
	if err != nil {
		log.Error().Err(err).Msg("failed to get user by id")
		return LoginResult{}, ErrUserNotFound
	}

	if err = bcrypt.CompareHashAndPassword([]byte(u.HashedPassword), []byte(password)); err != nil {
		log.Error().Err(err).Msg("failed password comparison")
		return LoginResult{}, ErrInvalidCredentials
	}

	accessTkn, err := tknGen.GenerateAccessToken(u.Username, u.Role)
	if err != nil {
		return LoginResult{}, err
	}

	refreshTkn, err := tknGen.GenerateRefreshToken(u.Username)
	if err != nil {
		return LoginResult{}, err
	}

	return LoginResult{
		User:         u,
		AccessToken:  accessTkn,
		RefreshToken: refreshTkn,
	}, nil
}

func Register(ctx context.Context, userCreator UserCreator, username, password string) (Model, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), 15)
	if err != nil {
		log.Error().Err(err).Msg("failed to hash password")
		return Model{}, err
	}

	u := Model{
		Username:       username,
		HashedPassword: string(hashedPassword),
		Role:           "PLAYER",
	}

	if err = userCreator.CreateUser(ctx, u); err != nil {
		log.Error().Err(err).Msg("failed to create user")
		return Model{}, err
	}

	return u, nil
}
