const mongoose = require("mongoose");

// Post Schema
let postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

let postModels = (module.exports = mongoose.model("posts", postSchema));
