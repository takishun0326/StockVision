package main

import (
	"log"
	"github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/cors"
)

func Do_Get(){
	app := fiber.New()

    app.Use(cors.New(cors.Config{
        AllowOrigins: "http://localhost:3000",
        AllowMethods: "GET, POST, PUT, DELETE",
        AllowHeaders: "Origin, Content-Type, Accept",
    }))

    app.Get("/api/message", func(c *fiber.Ctx) error {
        return c.JSON(fiber.Map{"message": "Hello, React + Go!"})
    })

    log.Println("Server is running on port 8080")
	app.Listen(":8080") // listen and serve on 0.0.0.0:8080
}

func main() {
	Do_Get()
}