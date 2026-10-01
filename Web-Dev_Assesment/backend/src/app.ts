import express from 'express';
import {getStockHandler} from "./api/stocks/contorller";

const app = express();

//calls the api
app.get('/api/stocks/:symbol', getStockHandler);

export default app;