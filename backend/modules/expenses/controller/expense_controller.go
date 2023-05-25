package controller

import (
	"encoding/json"
	"fmt"
	"rai-rub-jai/backend/modules/entities"
	"rai-rub-jai/backend/pkg/service"

	"github.com/gofiber/fiber/v2"
)

type Str struct {
	S string `json:"str" bson:"str"`
}

func NewExpensesController(r fiber.Router) {
	r.Get("/user/getexpense", GetExpenses)
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

func GetExpenses(c *fiber.Ctx) error {
	req := new(Str)

	if err := c.BodyParser(req); err != nil {
		return err
	}

	fmt.Println(req)

	exs, err := service.GetExpenses(req.S)
	if err != nil {
		return err
	}

	res, err := json.Marshal(exs)
	if err != nil {
		return err
	}

	return c.SendString(string(res))
}
