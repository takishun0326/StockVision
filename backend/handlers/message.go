package handlers

import (
	"github.com/gofiber/fiber/v2"
)

// message APIのハンドラ
func GetMessage(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "Hello, REACT + GO!"})
}