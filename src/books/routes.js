const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

bookRouter.get("/books", async (request, response) => {
  const getBooks = await Book.find();

  const successResponse = {
    message: "success",
    getBooks: getBooks,
  };

  response.send(successResponse);
});

bookRouter.get("/books/:title", async (request, response) => {
  const getBook = await Book.find(request.params);

  const successResponse = {
    message: "success",
    getBook: getBook,
  };

  response.send(successResponse);
});

bookRouter.post("/books", async (request, response) => {
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

bookRouter.put("/books", async (request, response) => {
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

bookRouter.delete("/books/:title", async (request, response) => {
  const deleteBook = await Book.deleteOne(request.params);

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
});

bookRouter.delete("/books", async (request, response) => {
  const deleteBook = await Book.deleteMany();

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
});

module.exports = bookRouter;
