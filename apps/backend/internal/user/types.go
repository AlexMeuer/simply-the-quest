package user

type Model struct {
	Username       string `json:"username"`
	HashedPassword string `json:"hashed_password,omitempty"`
	Role           string `json:"role"`
	CreatedAt      int    `json:"created_at"`
	UpdatedAt      int    `json:"updated_at"`
}
