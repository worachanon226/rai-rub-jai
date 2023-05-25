package controller

import (
	eController "rai-rub-jai/backend/modules/expenses/controller"
	rController "rai-rub-jai/backend/modules/revenues/controller"
	uController "rai-rub-jai/backend/modules/users/controller"

	"github.com/gofiber/fiber/v2"
)

func NewController(r fiber.Router) {
	uController.NewUsersController(r)
	rController.NewRevenuesController(r)
	eController.NewExpensesController(r)
}
