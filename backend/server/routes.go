package server

import (
	"github.com/gofiber/fiber/v2"
	"backend/handlers"
)

func SetupRoutes(app *fiber.App){
	// test API
	app.Get("/api/message", handlers.GetMessage)

	// 株価データAPI
	app.Get("/api/stock", handlers.GetStockData)
}