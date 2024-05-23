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

app.get("/player-info", cors(), (req: Request, res: Response) => {
  const response = ticTacToe.GetPlayers()
  res.send(response);
});

app.post("/player-info", cors(), (req: Request, res: Response) => {
  const data = getDataFromPostRequest(req)
  const response = ticTacToe.CreatePlayer(data.name, data.color)
  res.send(response);
});

app.patch("/player-info", cors(), (req: Request, res: Response) => {
  const data = getDataFromPatchRequest(req)
  const response = ticTacToe.UpdateScore(data.name)
  res.send(response);
});

app.post("/clear-info", (req: Request, res: Response) => {
  const response = ticTacToe.Clear()
  res.send(response);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});