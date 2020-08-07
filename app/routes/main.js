const express = require("express");
const router = express.Router();

const Post = require("../models/postModels");

router.get("/", (req, res) => {
  Post.find({}, (err, data) => {
    if (err) {
      res.send({ error: err });
    } else {
      res.render("main/index", { articles: data });
      console.log(data);
    }
  });
});

router.get("/:id", (req, res) => {
  Post.findById(req.params.id, (err, data) => {
    res.send({ articles: data });
  });
});

module.exports = router;
