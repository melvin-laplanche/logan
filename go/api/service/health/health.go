// Package health corresponds to the health service
package health

import (
	"github.com/labstack/echo"
	"github.com/melvin-laplanche/logan/api/core"
	"github.com/melvin-laplanche/logan/api/service/health/handlers"
)

// Register creates the routes needed for dealing with users
func Register(e *echo.Group, deps *core.Dependencies) {
	e.GET("/", core.NewRequest(handlers.Check))
}
