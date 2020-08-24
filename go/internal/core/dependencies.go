package core

import (
	"github.com/Nivl/logan/internal/logger"
	"github.com/Nivl/logan/internal/reporter"
	"github.com/labstack/echo"
)

// Dependencies contains the global dependencies of the app
type Dependencies struct {
	Features Features
	Reporter reporter.Reporter
	Logger   logger.Logger
}

// RequestDependencies contains the dependencies to use at a request level
type RequestDependencies struct {
	Features Features
	Reporter reporter.Scope
	Logger   logger.Logger
}

func newRequestDeps(deps *Dependencies, c echo.Context) *RequestDependencies {
	d := &RequestDependencies{
		Features: deps.Features,
	}
	if deps.Reporter != nil {
		d.Reporter = deps.Reporter.NewScope()
		d.Reporter.SetRequest(c.Request())
	}
	return d
}
