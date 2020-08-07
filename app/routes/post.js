const express = require("express");
const router = express.Router();

// Models
let Posts = require("../models/postModels");

router.get("/", (req, res) => {
  Posts.find({}, (err, data) => {
    if (err != null) {
      console.log(err);
    } else {
      res.render("articles/index", { posts: data });
      console.log(data);
    }
  });
});

router.get("/edit/:id", (req, res) => {
  Posts.findById(req.params.id, (err, data) => {
    if (err != null) {
      console.log(err);
    } else {
      res.render("articles/edit", { posts: data });
      console.log(data);
    }
  });
});

router.get("/new", (req, res) => {
  res.render("articles/new");
});

router.post("/", (req, res) => {
  let post = new Posts();
  post.title = req.body.title;
  post.author = req.body.author;
  post.content = req.body.content;

  post.save((err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect("/posts");
    }
  });
});

module.exports = router;
