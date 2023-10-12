const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Author = mongoose.model("author", authorSchema);

module.exports = Author;
