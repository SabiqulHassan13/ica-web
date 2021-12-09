const path = require("path");

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// template engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middleware list
app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts);

// route list
app.get("/", (req, res) => {
  //   res.send("<h1>Hello world</h1>");
  res.render("home");
});

app.get("/dashboard", (req, res) => {
  res.send("<h1>Dashboard Page</h1>");
});

app.get("/auth/login", (req, res) => {
  res.send(`
    <h2>Login Form</h2>
    <form action="/auth/login" method="POST">
        <input type="text" name="username" />
        <button>Submit</button>  
    </form>
    `);
});

app.post("/auth/login", (req, res) => {
  const { username } = req.body;
  console.log(username);
  //   res.send(`Username ${username}`);
  res.send("Thanks for login");
});

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
