const express = require("express");

const bookRouter = require("./book.routes");
const authorRouter = require("./author.routes");

const router = express.Router();

router.use("/ping", (req, res) => {
  res.json({ message: "v1 is working fine" });
});
router.use("/books", bookRouter);
router.use("/authors", authorRouter);

module.exports = router;
