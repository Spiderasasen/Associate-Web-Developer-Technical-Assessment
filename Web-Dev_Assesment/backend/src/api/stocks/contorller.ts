import {Request, Response} from 'express';
import {getStockData} from "./service";
import {StockDaySummary} from "./types";

export async function getStockHandler(req: Request, res: Response) {
    try{
        //getting the symbol from the url
        const symbol: string = req.params.symbol.toString().toUpperCase();

        //getting the data
        const data: StockDaySummary[] = await getStockData(symbol);

        res.json(data);
    }
    catch(err: any){
        res.status(500).json({error: err.message});
    }
}