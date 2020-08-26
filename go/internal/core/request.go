package core

import (
	"github.com/labstack/echo"
)

type (
	requestHandler func(c *Context) error
)

// Context represent a request's context. This is a wrapper around echo's
// context with added data
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

// NewRequest is a wrapper used to directly pass a pointer of our
// own context to the handlers
func NewRequest(hdl requestHandler) echo.HandlerFunc {
	return func(c echo.Context) error {
		return hdl(c.(*Context))
	}
}
