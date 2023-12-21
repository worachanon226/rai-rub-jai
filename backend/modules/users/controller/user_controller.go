package controller

import (
	"encoding/json"
	"rai-rub-jai/backend/modules/entities"
	"rai-rub-jai/backend/pkg/service"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func NewUsersController(r fiber.Router) {
	r.Post("/user/checkDupUser", checkDupUser)
	r.Post("/user/register", register)
	r.Post("/user/login", login)
}

func checkDupUser(c *fiber.Ctx) error {
	// fmt.Println(string(c.Body()))
	ch := service.IsUser(string(c.Body()))
	return c.SendString(strconv.FormatBool(ch))
}

func register(c *fiber.Ctx) error {
	req := new(entities.UserRegisterReq)
	// fmt.Println(req)

	if err := c.BodyParser(req); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"status":      fiber.ErrBadRequest.Message,
			"status_code": fiber.ErrBadRequest.Code,
			"message":     err.Error(),
			"result":      nil,
		})
	}

	user, err := service.UserRegister(req)
	if err != nil {
		return fiber.NewError(fiber.StatusOK, err.Error())
	}

	res, err := json.Marshal(user)
	if err != nil {
		return err
	}

	return c.SendString(string(res))
}

func login(c *fiber.Ctx) error {
	req := new(entities.UserLoginReq)
	if err := c.BodyParser(req); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"status":      fiber.ErrBadRequest.Message,
			"status_code": fiber.ErrBadRequest.Code,
			"message":     err.Error(),
			"result":      nil,
		})
	}

	user, err := service.UserLogin(req)
	if err != nil {
		return err
	}

	res, err := json.Marshal(user)
	if err != nil {
		return err
	}

	return c.SendString(string(res))
}
