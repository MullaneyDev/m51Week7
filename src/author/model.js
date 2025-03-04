const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  authorName: { type: String },
});

const Author = mongoose.model("author", authorSchema);

module.exports = Author;
