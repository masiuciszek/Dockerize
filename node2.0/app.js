const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Hello master Obi one!",
  });
});

app.listen(port, () =>
  console.log(`App is running on http://127.0.0.1:${port}`),
);
