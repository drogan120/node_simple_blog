const express = require("express");
const router = express.Router();

// Models
let Tags = require("../models/tagsModel");

router.get("/", (req, res) => {
  Tags.find({}, (err, data) => {
    if (err != null) {
      console.log(err);
    } else {
      res.render("tags/index", { tags: data });
    }
  });
});

router.get("/new", (req, res) => {
  res.render("tags/new");
});

// Save Tag to mongo db
router.post("/", (req, res) => {
  let tag = new Tags();
  tag.name = req.body.name;

  tag.save((err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect("/tags");
    }
  });
});

// get data by id
router.get("/edit/:id", (req, res) => {
  Tags.findById(req.params.id, (err, data) => {
    if (err != null) {
      console.log(err);
    } else {
      res.render("tags/edit", { data: data });
    }
  });
});

// Update data
router.post("/edit/:id", (req, res) => {
  let tags = {};
  tags.name = req.body.name;
  let query = { _id: req.params.id };

  Tags.update(query, tags, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/tags");
    }
  });
});
// Delete data
router.delete("/:id", (req, res) => {
  let query = { _id: req.params.id };
  Tags.deleteOne(query, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ messages: "data has been deleted" });
    }
  });
});

module.exports = router;
