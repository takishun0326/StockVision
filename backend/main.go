package main

import (
	// "log"
	// "github.com/gofiber/fiber/v2"
    // "github.com/gofiber/fiber/v2/middleware/cors"
    // "net/http"
	// "encoding/json"
    "backend/server"
)

// type StockData struct{
//    	Date   string  `json:"date"`
// 	Low    float64 `json:"low"`
// 	High   float64 `json:"high"`
// 	Open   float64 `json:"open"`
// 	Close  float64 `json:"close"`
// 	Volume int     `json:"volume"`
// }

// func getStockData(w http.ResponseWriter, r *http.Request) {
// 	data := []StockData{
// 		{"2024-03-18", 150, 170, 155, 165, 1200},
// 		{"2024-03-19", 160, 180, 165, 175, 1500},
// 		{"2024-03-20", 170, 190, 175, 185, 1300},
// 		{"2024-03-21", 180, 200, 185, 195, 1100},
// 		{"2024-03-22", 190, 210, 195, 205, 1800},
// 	}

// 	w.Header().Set("Content-Type", "application/json")
// 	json.NewEncoder(w).Encode(data)
// }




// func Do_Get(){
// 	app := fiber.New()

//     app.Use(cors.New(cors.Config{
//         AllowOrigins: "http://localhost:3000",
//         AllowMethods: "GET, POST, PUT, DELETE",
//         AllowHeaders: "Origin, Content-Type, Accept",
//     }))

//     app.Get("/api/message", func(c *fiber.Ctx) error {
//         return c.JSON(fiber.Map{"message": "Hello, React + Go!"})
//     })
//     	app.Listen(":8080") // listen and serve on 0.0.0.0:8080

// }

func main() {
	app := server.SetupServer()

    // http.HandleFunc("/api/stock", getStockData)

    app.Listen(":8080") // listen and serve on 0.0.0.0:8080

    // log.Println("Server is running on port 8080")
    // log.Fatal(app.Listen(":8080"))

}