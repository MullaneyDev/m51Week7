const { Router } = require("express");
const authorRouter = Router();

const {
  addAuthor,
  // findBookByAuthor,
  // findAllBooks,
  // deleteAllAuthors,
} = require("./controllers");

authorRouter.post("/authors", addAuthor);

// authorRouter.get("/authors", findAllBooks);

// authorRouter.get("/authors/:author", findBookByAuthor);

// authorRouter.delete("/authors", deleteAllAuthors);

module.exports = authorRouter;
