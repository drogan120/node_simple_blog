const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Post Schema
let postSchema = new Schema({
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
const Posts = mongoose.model("posts", postSchema);
module.exports = Posts;
