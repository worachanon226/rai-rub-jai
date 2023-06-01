package controller

import (
	"encoding/json"
	"rai-rub-jai/backend/modules/entities"
	"rai-rub-jai/backend/pkg/service"

	"github.com/gofiber/fiber/v2"
)

func NewExpensesController(r fiber.Router) {
	r.Get("/user/getexpense/:id", GetExpenses)
	r.Post("/user/postexpense", PostExpense)
	r.Post("/user/deleteexpense", DeleteExpense)
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

func DeleteExpense(c *fiber.Ctx) error {
	type Request struct {
		Userid string `json:"userid" bson:"userid"`
		Listid string `json:"listid" bson:"listid"`
	}

	req := new(Request)
	if err := c.BodyParser(req); err != nil {
		return err
	}

	if err := service.DeleteExpense(req.Userid, req.Listid); err != nil {
		return err
	}

	return c.SendString("Delete successfully")
}

func GetExpenses(c *fiber.Ctx) error {
	req := c.Params("id")

	exs, err := service.GetExpenses(req)
	if err != nil {
		return err
	}

	res, err := json.Marshal(exs)
	if err != nil {
		return err
	}

	return c.SendString(string(res))
}
