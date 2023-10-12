const Book = require("./model");

const findAllBooks = async (request, response) => {
  const getBooks = await Book.find();

  const successResponse = {
    message: "success",
    getBooks: getBooks,
  };

  response.send(successResponse);
};

const findBookByTitle = async (request, response) => {
  const getBook = await Book.find(request.params);

  const successResponse = {
    message: "success",
    getBook: getBook,
  };

  response.send(successResponse);
};

const addBook = async (request, response) => {
  const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
    price: request.body.price,
  });
  const successResponse = {
    message: "success",
    newBook: newBook,
  };

  response.send(successResponse);
};

const editAuthor = async (request, response) => {
  const updateBook = await Book.findOneAndUpdate(
    { title: request.body.title },
    { author: request.body.author }
  );

  const successResponse = {
    message: "success",
    updateBook: updateBook,
  };

  response.send(successResponse);
};

const deleteBookByTitle = async (request, response) => {
  const deleteBook = await Book.deleteOne(request.params.title);

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
};

const deleteAllBooks = async (request, response) => {
  const deleteBook = await Book.deleteMany();

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
};

const findByPrice = async (request, response) => {
  const findBookByPrice = await Book.find({
    price: { $gte: request.params.priceLow, $lte: request.params.priceHigh },
  }).exec();

  const successResponse = {
    message: "success",
    findBookByPrice: findBookByPrice,
  };

  response.send(successResponse);
};

const findByAuthor = async (request, response) => {
  const findBookByAuthor = await Book.find({
    author: request.params.author,
  });

  const successResponse = {
    message: "success",
    findBookByAuthor: findBookByAuthor,
  };

  response.send(successResponse);
};

module.exports = {
  findAllBooks: findAllBooks,
  findBookByTitle: findBookByTitle,
  addBook: addBook,
  editAuthor: editAuthor,
  deleteBookByTitle: deleteBookByTitle,
  deleteAllBooks: deleteAllBooks,
  findByPrice: findByPrice,
  findByAuthor: findByAuthor,
};
