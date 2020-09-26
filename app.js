const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

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
app.use(cookieParser("secret"));
app.use(
  session({
    secret: "drogan120",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 60000 },
  })
);

// Flash messages
app.use(flash());

// // Express Messages
// app.use(require("connect-flash")());
// app.use((req, res, next) => {
//   res.locals.messages = req.session(req, res);
//   next();
// });

app.all("/", (req, res) => {
  req.flash("test", "its work");
  res.redirect("/test");
});

app.all("/test", (req, res) => {
  res.send(JSON.stringify(req.flash("test")));
});
// // Route Variable
// const main = require("./app/routes/main");
// const dashboard = require("./app/routes/dashboard");
// const posts = require("./app/routes/post");
// const tags = require("./app/routes/tags");
// // route
// app.use("/", main);
// app.use("/dashboard", dashboard);
// app.use("/posts", posts);
// app.use("/tags", tags);

// Listen server
app.listen(config.port, () => {
  console.log("Server is running on http://127.0.0.1:" + config.port);
});
