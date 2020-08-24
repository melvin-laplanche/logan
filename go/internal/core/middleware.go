package core

import (
	"github.com/labstack/echo"
)

func NewContextMiddleware(deps *Dependencies) echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			cc := NewContext(deps, c)
			return next(cc)
		}
	}
}
