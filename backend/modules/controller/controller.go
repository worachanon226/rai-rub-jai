package controller

import (
	"rai-rub-jai/backend/modules/users/controller"

	"github.com/gofiber/fiber/v2"
)

func NewController(r fiber.Router) {
	controller.NewUsersController(r)
}
