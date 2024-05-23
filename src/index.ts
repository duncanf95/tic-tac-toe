import express, { Express, Request, Response } from "express";
import { TicTacToe } from "./app/TicTacToe";
import { getDataFromPatchRequest, getDataFromPostRequest } from "./app/Util";
import cors from 'cors';

export const app: Express = express();
const port = 3000;

const allowedOrigins = ['http://localhost:8080'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const ticTacToe = new TicTacToe()

app.get("/hello-world", cors(), (req: Request, res: Response) => {
    const response = ticTacToe.HelloWorld()
    res.send(response);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});