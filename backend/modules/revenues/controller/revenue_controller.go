package controller

import (
	"encoding/json"
	"rai-rub-jai/backend/modules/entities"
	"rai-rub-jai/backend/pkg/service"

	"github.com/gofiber/fiber/v2"
)

func NewRevenuesController(r fiber.Router) {
	r.Get("/user/getrevenue/:id", GetRevenue)
	r.Post("/user/postrevenue", PostRevenue)
	r.Post("/user/deleterevenue", DeleteRevenue)
}

func PostRevenue(c *fiber.Ctx) error {
	req := new(entities.PostRevenueReq)
	if err := c.BodyParser(req); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"status":      fiber.ErrBadRequest.Message,
			"status_code": fiber.ErrBadRequest.Code,
			"message":     err.Error(),
			"result":      nil,
		})
	}

	err := service.PostRevenue(req)
	if err != nil {
		return err
	}

	return c.SendString("Post successfully")
}

func DeleteRevenue(c *fiber.Ctx) error {
	type Request struct {
		Userid string `json:"userid" bson:"userid"`
		Listid string `json:"listid" bson:"listid"`
	}

	req := new(Request)
	if err := c.BodyParser(req); err != nil {
		return err
	}

	if err := service.DeleteRevenue(req.Userid, req.Listid); err != nil {
		return err
	}

	return c.SendString("Delete successfully")
}

func GetRevenue(c *fiber.Ctx) error {
	req := c.Params("id")

	exs, err := service.GetRevenue(req)
	if err != nil {
		return err
	}

	res, err := json.Marshal(exs)
	if err != nil {
		return err
	}

	return c.SendString(string(res))
}
