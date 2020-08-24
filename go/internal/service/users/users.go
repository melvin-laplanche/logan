// Package users corresponds to the user service
package users

import (
	"github.com/Nivl/logan/internal/core"
	"github.com/Nivl/logan/internal/service/users/handlers"
	"github.com/labstack/echo"
)

func Register(e *echo.Group, deps *core.Dependencies) {
	e.POST("/", core.NewRequest(handlers.CreateUser))
}
