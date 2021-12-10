const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("<h1>Hello world</h1>");
  res.render("home");
});

router.get("/dashboard", (req, res) => {
  //   res.send("<h1>Dashboard Page</h1>");
  res.render("dashboard");
});

module.exports = router;
