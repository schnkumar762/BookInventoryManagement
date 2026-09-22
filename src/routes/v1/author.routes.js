const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "author route het hit" });
});
module.exports = router;
