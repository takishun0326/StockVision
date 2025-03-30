package handlers

import (
	"github.com/gofiber/fiber/v2"
	"backend/models"
)

// 株価データを取得するAPI
func GetStockData(c *fiber.Ctx) error {
	data := []models.StockData{
		{"2024-03-18", 150, 170, 155, 165, 1200},
		{"2024-03-19", 160, 180, 165, 175, 1500},
		{"2024-03-20", 170, 190, 175, 185, 1300},
		{"2024-03-21", 180, 200, 185, 195, 1100},
		{"2024-03-22", 190, 210, 200, 100, 1800},
	}
	return c.JSON(data)
}
