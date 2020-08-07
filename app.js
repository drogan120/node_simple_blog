const express = require("express");
const path = require("path");
const app = express();

const config = require("./config/config");

// load templare engine
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "pug");

// load public assets
app.use(express.static(path.join(__dirname, "public")));

// Route Variable
const posts = require("./app/routes/post");
const dashboard = require("./app/routes/dashboard");
const main = require("./app/routes/main");
// route
app.use("/", main);
app.use("/post", posts);
app.use("/dashboard", dashboard);

// Listen server
app.listen(process.env.APP_PORT, () => {
  console.log("Server is running on http://127.0.0.1:" + process.env.APP_PORT);
});
