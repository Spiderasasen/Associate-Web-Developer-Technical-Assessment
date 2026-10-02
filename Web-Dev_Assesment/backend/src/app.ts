import express from 'express';
import cors from 'cors';
import {getStockHandler} from "./api/stocks/contorller";

const app = express();
app.use(cors());

//calls the api
app.get('/api/stocks/:symbol', getStockHandler);

export default app;