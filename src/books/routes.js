const { Router } = require("express");
const bookRouter = Router();

const {
  findAllBooks,
  findBookByTitle,
  addBook,
  editAuthor,
  deleteBookByTitle,
  deleteAllBooks,
  findByPrice,
  findByAuthor,
} = require("./controllers");

bookRouter.get("/books", findAllBooks);

bookRouter.get("/books/:title", findBookByTitle);

bookRouter.post("/books", addBook);

bookRouter.put("/books", editAuthor);

bookRouter.delete("/books/:title", deleteBookByTitle);

bookRouter.delete("/books/deleteAll", deleteAllBooks);

bookRouter.get("/books/author/:author", findByAuthor);

bookRouter.get("/books/price/:priceLow/:priceHigh", findByPrice);

module.exports = bookRouter;
