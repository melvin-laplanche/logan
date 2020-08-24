package handlers

import (
	"net/http"

	"github.com/Nivl/logan/internal/core"
)

// CreateUser inserts a new user in the database
func CreateUser(c *core.Context) error {
	return c.String(http.StatusCreated, "")
}
