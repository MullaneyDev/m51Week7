const { Router } = require("express");
const bookRouter = Router();

const {
  findAllBooks,
  findBookByTitle,
  addBook,
  editAuthor,
  deleteBookByTitle,
  deleteAllBooks,
} = require("./controllers");

bookRouter.get("/books", findAllBooks);

bookRouter.get("/books/:title", findBookByTitle);

bookRouter.post("/books", addBook);

bookRouter.put("/books", editAuthor);

bookRouter.delete("/books/:title", deleteBookByTitle);

bookRouter.delete("/books", deleteAllBooks);

module.exports = bookRouter;
