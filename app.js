const express = require("express");
const app = express();
const dotEnv = require("dotenv");

require("./config/config");

app.get("/", (req, res) => {
  res.send({ messages: "hello world" });
});
app.listen(process.env.APP_PORT, () => {
  console.log("Server is running on http://127.0.0.1:" + process.env.APP_PORT);
});
