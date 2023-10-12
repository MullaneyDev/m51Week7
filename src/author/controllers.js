const Author = require("./model");

const addAuthor = async (request, response) => {
  const newAuthor = await Author.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
    price: request.body.price,
  });
  const successResponse = {
    message: "success",
    newAuthor: newAuthor,
  };

  response.send(successResponse);
};
const findAllBooks = async (request, response) => {
  const getBooks = await Author.find();

  const successResponse = {
    message: "success",
    getBooks: getBooks,
  };

  response.send(successResponse);
};

const findBookByAuthor = async (request, response) => {
  const getAuthor = await Author.find(request.params);

  const successResponse = {
    message: "success",
    getAuthor: getAuthor,
  };

  response.send(successResponse);
};

const deleteAllAuthors = async (request, response) => {
  const deleteAuthor = await Author.deleteMany();

  const successResponse = {
    message: "success",
    deleteAuthor: deleteAuthor,
  };

  response.send(successResponse);
};

module.exports = {
  addAuthor: addAuthor,
  findBookByAuthor: findBookByAuthor,
  findAllBooks: findAllBooks,
  deleteAllAuthors: deleteAllAuthors,
};
