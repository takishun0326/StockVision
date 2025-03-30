package models

// 株価データの構造体
type StockData struct {
	Date   string  `json:"date"`
	Low    float64 `json:"low"`
	High   float64 `json:"high"`
	Open   float64 `json:"open"`
	Close  float64 `json:"close"`
	Volume int     `json:"volume"`
}
