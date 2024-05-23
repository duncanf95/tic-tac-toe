import request from "supertest";
import express, { Express, Request, Response } from "express";
import { app } from "../src/index"


describe("Test app.ts", () => {

    test("create user test", async () => {
      const res = await request(app).post("/player-info").send({name: "test name", color: "red"})
      expect(res.status).toEqual(200)
      expect(res.body).toEqual({"color": "red", "name": "test name", score: 0});
    });

    test("update user test", async () => {
      const res = await request(app).patch("/player-info").send({name: "test name"})
      expect(res.status).toEqual(200)
      expect(res.body).toEqual({"color": "red", "name": "test name", score: 1});
    });

    test("get user test", async () => {
      const res = await request(app).get("/player-info")
      expect(res.status).toEqual(200)
      expect(res.body).toEqual([{"color": "red", "name": "test name", "score": 1}]);
    });

    test("clear info test", async () => {
      const res = await request(app).post("/clear-info")
      expect(res.status).toEqual(200)
      expect(res.body).toEqual(true);
    });
  });