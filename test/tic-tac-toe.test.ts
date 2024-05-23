import request from "supertest";
import express, { Express, Request, Response } from "express";
import { app } from "../src/index"


describe("Test app.ts", () => {

    test("create user test", async () => {
      const res = await (await request(app).post("/player-info")).body({name: "test name", color: "red"})
      expect(res.status).toEqual(200)
      expect(res.body).toEqual([{"color": "red", "name": "my name"}]);
    });

    test("get user test", async () => {
      const res = await request(app).get("/player-info")
      expect(res.status).toEqual(200)
      expect(res.body).toEqual([{"color": "red", "name": "my name", "score": 0}]);
    });

    test("clear info test", async () => {
      const res = await request(app).post("/clear-info")
      expect(res.status).toEqual(200)
      expect(res.body).toEqual(true);
    });
  });