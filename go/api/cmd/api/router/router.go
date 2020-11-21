// Package router contains method to create the default router used
// by the api
package router

import (
	"github.com/labstack/echo"

	"github.com/melvin-laplanche/logan/api/core"
	"github.com/melvin-laplanche/logan/api/service/health"
)

// NewRouter return the default router with all the routes
// and middleware set
func NewRouter(deps *core.Dependencies) *echo.Echo {
	e := core.NewEchoConf(deps)
	health.Register(e.Group("/health"), deps)
	return e
}
