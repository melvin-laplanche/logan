package core

import (
	"github.com/labstack/echo"
)

type (
	requestHandler func(c *Context) error
)

func NewRequest(hdl requestHandler) echo.HandlerFunc {
	return func(c echo.Context) error {
		return hdl(c.(*Context))
	}
}
