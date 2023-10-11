require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

require("./db/connection"); //not in a variable to enable the connection to stay open and not require a function call

const app = express();

app.use(express.json());

const bookSchema = new mongoose.Schema({
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
});

const Book = mongoose.model("book", bookSchema);

app.get("/books", async (request, response) => {
  const getBooks = await Book.find();

  const successResponse = {
    message: "success",
    getBooks: getBooks,
  };

  response.send(successResponse);
});

app.get("/books/:title", async (request, response) => {
  const getBook = await Book.find(request.params);

  const successResponse = {
    message: "success",
    getBook: getBook,
  };

  response.send(successResponse);
});

app.post("/books", async (request, response) => {
  const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "success",
    newBook: newBook,
  };

  response.send(successResponse);
});

app.put("/books", async (request, response) => {
  const updateBook = await Book.findOneAndUpdate(
    { title: request.body.title },
    { author: request.body.author }
  );

  const successResponse = {
    message: "success",
    updateBook: updateBook,
  };

  response.send(successResponse);
});

// app.delete("/books", async (request, response) => {
//   const deleteBook = await Book.deleteOne({
//     title: request.body.title,
//   });

//   const successResponse = {
//     message: "success",
//     deleteBook: deleteBook,
//   };

//   response.send(successResponse);
// });

app.delete("/books/:title", async (request, response) => {
  const deleteBook = await Book.deleteOne(request.params);

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
});

app.delete("/books", async (request, response) => {
  const deleteBook = await Book.deleteMany();

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
});

app.update;
app.listen(5001, () => {
  console.log("Server is listening");
});
