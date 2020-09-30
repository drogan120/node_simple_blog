const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

let User = require("../models/userModel");

// Register Form
router.get("/register", (req, res) => {
  res.render("auth/register");
});
// Login form
router.get("/login", (req, res) => {
  res.render("auth/login");
});

// User List
router.get("/", (req, res) => {
  res.render("user/index");
});
// Save Post to database
router.post("/", (req, res) => {
  let user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.username = req.body.username;
  user.password = req.body.password;

  user.save((err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect("/user/login");
    }
  });
});

module.exports = router;
