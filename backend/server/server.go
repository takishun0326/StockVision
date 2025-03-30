// Fiber サーバーの設定
package server

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

// サーバーセットアップ関数
func SetupServer() *fiber.App{
	app := fiber.New()

	// CORS設定
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowMethods: "GET, POST, PUT, DELETE",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	SetupRoutes(app)
	return app
}