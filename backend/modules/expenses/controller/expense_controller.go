package controller

import (
	"rai-rub-jai/backend/modules/entities"
	"rai-rub-jai/backend/pkg/service"

	"github.com/gofiber/fiber/v2"
)

func NewExpensesController(r fiber.Router) {
	r.Post("/user/postexpense", PostExpense)
}

func PostExpense(c *fiber.Ctx) error {
	req := new(entities.PostExpenseReq)
	if err := c.BodyParser(req); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"status":      fiber.ErrBadRequest.Message,
			"status_code": fiber.ErrBadRequest.Code,
			"message":     err.Error(),
			"result":      nil,
		})
	}

	err := service.PostExpense(req)
	if err != nil {
		return err
	}

	return c.SendString("Post successfully")
}
