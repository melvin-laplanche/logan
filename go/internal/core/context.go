package core

import (
	"github.com/labstack/echo"
)

type Context struct {
	echo.Context
	Deps *RequestDependencies
}

// NewContext returns a new Core context
func NewContext(deps *Dependencies, c echo.Context) *Context {
	return &Context{
		Context: c,
		Deps:    newRequestDeps(deps, c),
	}
}
