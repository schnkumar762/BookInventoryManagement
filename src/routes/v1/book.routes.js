const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "book route het hit" });
});
module.exports = router;
