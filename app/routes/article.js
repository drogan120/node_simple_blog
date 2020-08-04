const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("articles/index");
});

router.get("/:any", (req, res) => {
  res.send("articles edit");
});

router.post("/", (req, res) => {
  res.send("articles post");
});

module.exports = router;
