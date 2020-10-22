// Package core contains core methods, struct, and interfaces needed
// for for the core workflow of the app. The core workflow represents
// dependencies, requests, etc.
package core

import (
	"fmt"
	"net/http"

	"github.com/google/uuid"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

// NewEchoConf sets all middleware and global conf of Echo
func NewEchoConf(deps *Dependencies) *echo.Echo {
	e := echo.New()
	e.HTTPErrorHandler = errorHandler
	e.Use(middleware.Recover())
	e.Use(middleware.Gzip())
	e.Use(middleware.RequestIDWithConfig(middleware.RequestIDConfig{
		Generator: func() string {
			return uuid.New().String()
		},
	}))
	// TODO(melvin): Will print on stdout
	e.Use(middleware.Logger())
	e.Use(NewContextMiddleware(deps))
	return e
}

func errorHandler(err error, c echo.Context) {
	code := http.StatusInternalServerError
	var msg interface{}

	he, ok := err.(*echo.HTTPError)
	switch {
	case ok:
		code = he.Code
		msg = he.Message
		if he.Internal != nil {
			err = fmt.Errorf("%v, %v", err, he.Internal)
		}
	case c.Echo().Debug:
		msg = err.Error()
	default:
		msg = http.StatusText(code)
	}

	// We send the error to the reporter
	// TODO(melvin): Log somewhere else?
	if cc, ok := c.(*Context); ok {
		if cc.Deps.Reporter != nil {
			cc.Deps.Reporter.ReportError(err)
		}
	}

	// We send response back to the user
	if _, ok := msg.(string); ok {
		msg = echo.Map{"message": msg}
	}
	if !c.Response().Committed {
		// a HEAD request should _never_ get any body
		if c.Request().Method == http.MethodHead {
			err = c.NoContent(code)
		} else {
			err = c.JSON(code, msg)
		}

		// TODO(melvin): Log somewhere else?
		if err != nil {
			// We send the error to the reporter
			if cc, ok := c.(*Context); ok {
				if cc.Deps.Reporter != nil {
					cc.Deps.Reporter.ReportError(err)
				}
			}
		}
	}
}
