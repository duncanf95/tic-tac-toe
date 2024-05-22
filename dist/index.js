"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TicTacToe_1 = require("./app/TicTacToe");
const app = (0, express_1.default)();
const port = 3000;
const ticTacToe = new TicTacToe_1.TicTacToe();
app.get("/hello-world", (req, res) => {
    const response = ticTacToe.HelloWorld();
    res.send(response);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
