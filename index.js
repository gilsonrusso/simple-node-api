const port = process.env.PORT || 8000;
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Worl");
});

app.listen(port, () => {
  console.log("App listening on port 8000");
});

module.exports = app;
