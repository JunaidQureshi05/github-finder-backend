const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
require("dotenv").config();
const app = express();

app.use(cors());
app.get("/token", (req, res) => {
  res.status(200).send({ token: process.env.SECRET_GITHUB_API_TOKEN });
});

app.get("/token", (req, res) => {
  res
    .status(200)
    .json({ token: process.env.SECRET_GITHUB_API_TOKEN || "no-token" });
});

app.get("/", (req, res) => {
  res.status(200).send("API root working");
});

module.exports = serverless(app);
