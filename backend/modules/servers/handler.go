package servers

import (
	"rai-rub-jai/backend/modules/users/controller"
	"rai-rub-jai/backend/pkg/service"

	"github.com/gofiber/fiber/v2"
)

func (s *Server) MapHandlers() error {
	service.NewService(s.Db)
	controller.NewUsersController(s.App)

	s.App.Use(func(c *fiber.Ctx) error {
		return c.Status(fiber.ErrInternalServerError.Code).JSON(fiber.Map{
			"status":      fiber.ErrInternalServerError.Message,
			"status_code": fiber.ErrInternalServerError.Code,
			"message":     "error, end point not found",
			"result":      nil,
		})
	})

	return nil
}
