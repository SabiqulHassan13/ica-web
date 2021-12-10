const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  //   res.send(`Login Form`);
  res.render("auth/login");
});

router.post("/login", (req, res) => {
  const { username } = req.body;
  console.log(username);
  //   res.send(`Username ${username}`);
  //   res.send("Thanks for login");
  res.redirect("/dashboard");
});

router.get("/logout", (req, res) => {
  // console.log("Thanks for Logout");
  res.send("Thanks for Logout");
  // res.redirect("/");
});

module.exports = router;
