require("dotenv").config();
const express = require("express");

const app = express();

// const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/twitter", (req, res) => {
  res.send("<h1>My twitter handle: Mahendra5495</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`);
});
