import express, { Express, Request, Response } from "express";
import { TicTacToe } from "./app/TicTacToe";

const app: Express = express();
const port = 3000;

const ticTacToe = new TicTacToe()

app.get("/hello-world", (req: Request, res: Response) => {
    const response = ticTacToe.HelloWorld()
    res.send(response);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});