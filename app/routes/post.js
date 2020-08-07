const express = require("express");
const router = express.Router();

// Models
let Posts = require("../models/postModels");

router.get("/", (req, res) => {
  res.render("articles/index");
});

router.get("/new", (req, res) => {
  res.render("articles/add");
});

router.get("/:any", (req, res) => {
  res.render("articles/edit");
});

router.post("/", (req, res) => {
  res.send("articles post");
});

module.exports = router;
