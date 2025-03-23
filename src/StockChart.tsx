import React from "react";
import ReactECharts from "echarts-for-react";

// 日付，安値，高値，始値，終値
type StockData = [string, number, number, number, number];

const sampleData: StockData[] = [
    ["2024-03-18", 150, 170, 155, 165],
    ["2024-03-19", 160, 180, 165, 175],
    ["2024-03-20", 170, 190, 175, 185],
    ["2024-03-21", 180, 200, 185, 195],
    ["2024-03-22", 190, 210, 195, 205],
    ["2024-03-23", 195, 215, 200, 210],
    ["2024-03-24", 200, 220, 205, 215],
    ["2024-03-25", 190, 210, 200, 195], // 始値 > 終値 (赤)
    ["2024-03-26", 185, 205, 190, 180], // 始値 > 終値 (赤)
    ["2024-03-27", 175, 195, 180, 170], // 始値 > 終値 (赤)
    ["2024-03-28", 165, 185, 170, 180], // 始値 < 終値 (緑)
    ["2024-03-29", 180, 200, 185, 190], // 始値 < 終値 (緑)
    ["2024-03-30", 190, 210, 195, 200], // 始値 < 終値 (緑)
];

const calculateMA = (days: number) => {
    return sampleData.map((_, i) => {
        if (i < days - 1) return null;
        const sum = sampleData.slice(i - days + 1, i + 1).reduce((acc, d) => acc + d[4], 0);
        return sum / days;
    });
}

const ma5 = calculateMA(5);
const ma10 = calculateMA(10);
const ma20 = calculateMA(20);

const StockChart: React.FC = () => {
    const option = {
        title: {
            left: "center",
            text: "CandleStick",
        },
        xAxis: {
            type: "category",
            data: sampleData.map((d) => d[0]), // 日付
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                type: "candlestick",
                name: "株価",
                data: sampleData.map((d) => [d[1], d[2], d[3], d[4]]), // [安値, 高値, 始値, 終値]
                itemStyle: {
                    color: "green", // 陽線 (始値 < 終値)
                    color0: "red", // 陰線 (始値 > 終値)
                    borderColor: "green",
                    borderColor0: "red",
                },
            },
            {
                name: "MA5",
                type: "line",
                data: ma5,
                smooth: true,
                lineStyle: { color: "blue" },
            },
            {
                name: "MA10",
                type: "line",
                data: ma10,
                smooth: true,
                lineStyle: { color: "purple" },
            },
            {
                name: "MA20",
                type: "line",
                data: ma20,
                smooth: true,
                lineStyle: { color: "orange" },
            },
        ],
    }
    return <ReactECharts option={option} style={{ height: 400, width: "100%" }} />;
};

export default StockChart;