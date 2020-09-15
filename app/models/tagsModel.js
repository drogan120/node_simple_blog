const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let tagsSchema = new Schema({
  name: { type: String, required: true },
});

const Tags = mongoose.model("tags", tagsSchema);
module.exports = Tags;
