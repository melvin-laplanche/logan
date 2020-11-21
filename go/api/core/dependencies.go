package core

import (
	"github.com/labstack/echo"
	"github.com/melvin-laplanche/logan/shared/logger"
	"github.com/melvin-laplanche/logan/shared/reporter"
)

// Dependencies contains the global dependencies of the app
type Dependencies struct {
	Reporter reporter.Reporter
	Logger   logger.Logger
}

// RequestDependencies contains the dependencies to use at a request level
type RequestDependencies struct {
	Reporter reporter.Scope
	Logger   logger.Logger
}

func newRequestDeps(deps *Dependencies, c echo.Context) *RequestDependencies {
	d := &RequestDependencies{}
	if deps.Reporter != nil {
		d.Reporter = deps.Reporter.NewScope()
		d.Reporter.SetRequest(c.Request())
	}
	return d
}
