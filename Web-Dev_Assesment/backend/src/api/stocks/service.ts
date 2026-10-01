import {formatDate} from "../utils/date";
import type {StockDaySummary} from "./types";
import {fetchYahoo} from "../utils/httpClient";

export async function getStockData(symbol: string): Promise<StockDaySummary[]> {
    //creating the url to get the data
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=15m&range=1mo`;

    //fetching the data url
    const data = await fetchYahoo(url);

    const timestamps = data.chart.result[0].timestamp;
    const quote = data.chart.result[0].indicators.quote[0];
    const grouped: Record<string, { low: number[], high: number[], volume: number[] }> = {};

    //getting the timestamps of the record stock the user wanted to see
    timestamps.forEach((ts: number, i: number) => {
        const day: string = formatDate(ts);

        //if the dat is not in the groupped object, then it will be created
        if (!grouped[day]) {
            grouped[day] = {
                low: [],
                high: [],
                volume: []
            }
        }

        //adding the low, high, and volume of the grouped object
        grouped[day].low.push(quote.low[i]);
        grouped[day].high.push(quote.high[i]);
        grouped[day].volume.push(quote.volume[i]);
    });

    //mapping the grouped object to the StockDaySummary interface
    const result: StockDaySummary[] = Object.entries(grouped).map(([day, values]) => {
        const lowAvg: number = average(values.low);
        const highAvg: number = average(values.high);
        const volumeSum: number = sum(values.volume);

        //returns the values of the day
        return {
            date: day,
            lowAverage: lowAvg,
            highAverage: highAvg,
            volume: volumeSum,
        };
    });
    return result;
}

//returns the average of the values
function average(values: number[]): number {
    return values.reduce((a:number, b:number) => a + b, 0) / values.length;
}

//returing the sum of the values
function sum(values: number[]):number {
    return values.reduce((a:number, b:number) => a + b, 0);
}