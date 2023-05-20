package controller

import (
	"rai-rub-jai/backend/modules/entities"
	"rai-rub-jai/backend/pkg/service"

	"github.com/gofiber/fiber/v2"
)

func NewUsersController(r fiber.Router) {
	r.Post("/user/register", register)
}

func register(c *fiber.Ctx) error {
	req := new(entities.UserRegisterReq)
	if err := c.BodyParser(req); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"status":      fiber.ErrBadRequest.Message,
			"status_code": fiber.ErrBadRequest.Code,
			"message":     err.Error(),
			"result":      nil,
		})
	}

	err := service.UserRegister(req)
	if err != nil {
		panic(err.Error())
	}
	return nil

}
