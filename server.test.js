const request = require("supertest");
const express = require("express");

// Import the app directly
const app = require("./server");

// Test suite
describe("Lab3 API", () => {
  it("should return Hello message at /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Hello from Lab 3 API 🚀");
  });

  it("should return OK at /health", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("OK");
  });
});
