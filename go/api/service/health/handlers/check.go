package handlers

import (
	"net/http"

	"github.com/melvin-laplanche/logan/api/core"
)

// CheckResponse represents the output of an healthcheck
type CheckResponse struct {
	Status string `json:"status"`
}

// Check performs a health check
func Check(c *core.Context) error {
	return c.JSON(http.StatusOK, CheckResponse{Status: "success"})
}
