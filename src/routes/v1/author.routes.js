const express = require("express");

const authorRouter = express.Router();

authorRouter.get("/", (req, res) => {
  res.json({ message: "author route het hit" });
});
module.exports = authorRouter;
