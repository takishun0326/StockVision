import React from "react";
import ReactECharts from "echarts-for-react";

// [日付, 安値, 高値, 始値, 終値]
// [date, open, close, high, low]
type StockData = [string, number, number, number, number];

const sampleData: StockData[] = [
    ["2024-03-18", 150, 170, 155, 165],
    ["2024-03-19", 160, 180, 165, 175],
    ["2024-03-20", 170, 190, 175, 185],
    ["2024-03-21", 180, 200, 185, 195],
    ["2024-03-22", 190, 210, 195, 205],
    ["2024-03-23", 195, 215, 200, 210],
    ["2024-03-24", 200, 220, 205, 215],
    ["2024-03-25", 190, 210, 200, 195], // 陰線
    ["2024-03-26", 185, 205, 190, 180], // 陰線
    ["2024-03-27", 175, 195, 180, 170], // 陰線
    ["2024-03-28", 165, 185, 170, 180], // 陽線
    ["2024-03-29", 180, 200, 185, 190], // 陽線
    ["2024-03-30", 190, 210, 195, 200], // 陽線
];

// 移動平均 (MA) の計算
const calculateMA = (days: number) => {
    return sampleData.map((_, i) => {
        if (i < days - 1) return null;
        const sum = sampleData.slice(i - days + 1, i + 1).reduce((acc, d) => acc + d[4], 0);
        return sum / days;
    });
};

const ma5 = calculateMA(5);
const ma10 = calculateMA(10);
const ma20 = calculateMA(20);

const StockChart: React.FC = () => {
    const option = {
        legend: {
            data: ["日K", "MA5", "MA10", "MA20"],
            inactiveColor: "#777",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                animation: false,
                type: "cross",
                lineStyle: {
                    color: "#376df4",
                    width: 2,
                    opacity: 1,
                },
            },
        },
        xAxis: {
            type: "category",
            data: sampleData.map((d) => d[0]),
            axisLine: { lineStyle: { color: "#8392A5" } },
        },
        yAxis: {
            scale: true,
            axisLine: { lineStyle: { color: "#8392A5" } },
            splitLine: { show: false },
        },
        grid: {
            bottom: 80,
        },
        dataZoom: [
            {
                textStyle: { color: "#8392A5" },
                handleIcon:
                    "path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
                dataBackground: {
                    areaStyle: { color: "#8392A5" },
                    lineStyle: { opacity: 0.8, color: "#8392A5" },
                },
                brushSelect: true,
            },
            {
                type: "inside",
            },
        ],
        series: [
            {
                type: "candlestick",
                name: "日K",
                data: sampleData.map((d) => [d[3], d[4], d[1], d[2]]), // [安値, 高値, 始値, 終値]
                itemStyle: {
                    color: "#0CF49B", // 陽線
                    color0: "#FD1050", // 陰線
                    borderColor: "#0CF49B",
                    borderColor0: "#FD1050",
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
    };

    return <ReactECharts option={option} style={{ height: 500, width: "100%" }} />;
};

export default StockChart;
