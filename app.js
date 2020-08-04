const express = require("express");
const path = require("path");
const app = express();

const config = require("./config/config");

// load templare engine
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "pug");

// Route Variable
const article = require("./app/routes/article");
const dashboard = require("./app/routes/dashboard");
// route
app.use("/articles", article);
app.use("/dashboard", dashboard);

// Listen server
app.listen(process.env.APP_PORT, () => {
  console.log("Server is running on http://127.0.0.1:" + process.env.APP_PORT);
});
