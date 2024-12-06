package jwt

import (
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type CustomClaims struct {
	UserID string `json:"sub"`
	Role   string `json:"role"`
	jwt.RegisteredClaims
}

type JWTTokenGenerator struct {
	AccessTokenSecret  []byte
	RefreshTokenSecret []byte
	AccessTokenTTL     time.Duration
	RefreshTokenTTL    time.Duration
	Domain             string
}

func (t *JWTTokenGenerator) GenerateAccessToken(userID, role string) (string, error) {
	claims := CustomClaims{
		UserID: userID,
		Role:   role,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(t.AccessTokenTTL)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(t.AccessTokenSecret)
}

func (t *JWTTokenGenerator) GenerateRefreshToken(userID string) (string, error) {
	claims := jwt.RegisteredClaims{
		ExpiresAt: jwt.NewNumericDate(time.Now().Add(t.RefreshTokenTTL)),
		IssuedAt:  jwt.NewNumericDate(time.Now()),
		Subject:   userID,
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(t.RefreshTokenSecret)
}
