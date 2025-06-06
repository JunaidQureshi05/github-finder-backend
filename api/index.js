const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
require("dotenv").config();
const app = express();

app.use(cors());
app.get("/token", (req, res) => {
  res.status(200).send({ token: process.env.SECRET_GITHUB_API_TOKEN });
});

module.exports = serverless(app);
