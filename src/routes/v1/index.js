const express = require("express");

const bookRouter = require("./book.routes");
const authorRouter = require("./author.routes");

const v1Router = express.Router();

v1Router.use("/ping", (req, res) => {
  res.json({ message: "v1 is working fine" });
});
v1Router.use("/books", bookRouter);
v1Router.use("/authors", authorRouter);

module.exports = v1Router;
