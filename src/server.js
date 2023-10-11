require("dotenv").config();
const express = require("express");

require("./db/connection"); //not in a variable to enable the connection to stay open and not require a function call
const bookRouter = require("./books/routes");
const app = express();

app.use(express.json());

app.use(bookRouter);

app.update;
app.listen(5001, () => {
  console.log("Server is listening");
});
