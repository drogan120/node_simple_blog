const express = require("express");
const path = require("path");

const app = express();

require("./config/config");

// load templare engine
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/articles", (req, res) => {
  res.render("articles/index");
});

app.listen(process.env.APP_PORT, () => {
  console.log("Server is running on http://127.0.0.1:" + process.env.APP_PORT);
});
