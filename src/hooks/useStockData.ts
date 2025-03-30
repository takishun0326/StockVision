// src/hooks/useStockData.ts
import { useState, useEffect } from 'react';
import { fetchStockData } from '../services/stockService';
import { StockData } from '../types/stock';

export const useStockData = (symbol: string) => {
    const [stockData, setStockData] = useState<StockData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getStockData = async () => {
            try {
                const data = await fetchStockData(symbol);
                setStockData(data);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        getStockData();
    }, [symbol]);

    return { stockData, loading, error };
};
