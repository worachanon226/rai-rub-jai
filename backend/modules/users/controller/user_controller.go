package controller

import "github.com/gofiber/fiber"

func NewUsersController(r fiber.Router) {
	r.Post("/")
}
