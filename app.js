const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const session = require("express-session");

const config = require("./config/config");

// load templare engine
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "pug");

// load public assets
app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express Sessions
app.use(
  session({
    secret: "drogan120",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// Express Messages
app.use(require("connect-flash")());
app.use((req, res, next) => {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

// Route Variable
const main = require("./app/routes/main");
const dashboard = require("./app/routes/dashboard");
const posts = require("./app/routes/post");
const tags = require("./app/routes/tags");
// route
app.use("/", main);
app.use("/dashboard", dashboard);
app.use("/posts", posts);
app.use("/tags", tags);

// Listen server
app.listen(config.port, () => {
  console.log("Server is running on http://127.0.0.1:" + config.port);
});
