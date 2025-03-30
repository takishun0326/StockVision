import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // GoバックエンドのURL

export const fetchStockData = async (symbol: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/stock/${symbol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
};
