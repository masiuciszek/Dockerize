// @ts-nocheck
// @ts-ignore
const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("HELLO WORLD!!!");
});

app.listen(port, () => {
  console.log("app is listen on port " + port);
});
