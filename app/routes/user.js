const express = require("express");
const router = express.Router();

let User = require("../models/userModel");

// Register Form
router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

module.exports = router;
