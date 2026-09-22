const express = require("express");

const bookRouter = express.Router();

bookRouter.get("/", (req, res) => {
  res.json({ message: "book route het hit" });
});
module.exports = bookRouter;
