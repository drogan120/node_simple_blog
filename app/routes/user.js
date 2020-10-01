const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

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

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/user/login",
    failureFlash: true,
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/user/login");
});

// Save Post to database
router.post("/", (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        console.log(err);
      }
      user.password = hash;
      user.save((err) => {
        if (err) {
          console.log(err);
          return;
        } else {
          res.redirect("/user/login");
        }
      });
    });
  });
});
module.exports = router;
