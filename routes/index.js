const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("home", { title: "Quote Generator" });
});

module.exports = router;
