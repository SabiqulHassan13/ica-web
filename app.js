const path = require("path");

const express = require("express");
const morgan = require("morgan");
const expressLayouts = require("express-ejs-layouts");

const indexRoutes = require("./routes/index-routes");

const app = express();

/**
 *  middleware list
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(morgan("tiny"));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(expressLayouts);

/**
 *  template engine setup
 */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.set("layout", "layouts/layout");

/**
 *  route list
 */
app.use("/", indexRoutes);
app.get("/auth/login", (req, res) => {
  //   res.send(`Login Form`);
  res.render("auth/login");
});

app.post("/auth/login", (req, res) => {
  const { username } = req.body;
  console.log(username);
  //   res.send(`Username ${username}`);
  //   res.send("Thanks for login");
  res.redirect("/dashboard");
});

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
