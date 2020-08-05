const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("dashboard/index");
});

router.get("/profile", (req, res) => {
  res.render("dashboard/profile");
});

module.exports = router;
