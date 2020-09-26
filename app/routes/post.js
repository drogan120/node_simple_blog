const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
// Models
let Posts = require("../models/postModels");
let Tags = require("../models/tagsModel");

router.get("/", (req, res) => {
  Posts.find({}, (err, data) => {
    if (err != null) {
      console.log(err);
    } else {
      res.render("articles/index", { posts: data });
    }
  });
});

router.get("/edit/:id", (req, res) => {
  Posts.findById(req.params.id, (err, data) => {
    if (err != null) {
      console.log(err);
    } else {
      Tags.find({}, (err, tags) => {
        if (err != null) {
          console.log(err);
        } else {
          res.render("articles/edit", { posts: data, tags: tags });
        }
      });
    }
  });
});

router.get("/new", (req, res) => {
  Tags.find({}, (err, data) => {
    if (err != null) {
      console.log(err);
    } else {
      res.render("articles/new", { tags: data });
    }
  });
});

// Save Post to database
router.post("/", (req, res) => {
  let post = new Posts();
  post.title = req.body.title;
  post.author = req.body.author;
  post.tags = req.body.tags;
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

// Update data to database
router.post("/edit/:id", (req, res) => {
  let post = {};
  post.title = req.body.title;
  post.author = req.body.author;
  post.tags = req.body.tags;
  post.content = req.body.content;

  let query = { _id: req.params.id };
  Posts.updateOne(query, post, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      req.flash("success", "articles has been updated");
      res.redirect("/posts");
    }
  });
});

// Delete Post
router.delete("/:id", (req, res) => {
  let query = { _id: req.params.id };
  Posts.deleteOne(query, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ messages: "data has been deleted" });
    }
  });
});

module.exports = router;
