const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.get("/token", (req, res) => {
  res.status(200).send({ token: process.env.SECRET_GITHUB_API_TOKEN });
});

const serverless = require("serverless-http");
module.exports = serverless(app);
