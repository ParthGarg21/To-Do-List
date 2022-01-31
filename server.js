const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
let workItems = [];

const date = new Date();
const options = {
  day: "numeric",
  month: "short",
  weekday: "long",
};
let today = date.toLocaleDateString("en-US", options);

app.listen(3000, function () {
  console.log("Server running at port : 3000!");
});

app.get("/", function (req, res) {
  res.render("index", { title: today, items: items, path: "/" });
});

app.post("/", function (req, res) {
  const body = req.body;

  let newItem = body.newItem;

  items.push(newItem);

  res.redirect("/");
});

app.get("/Work", function (req, res) {
  res.render("index", { title: "Work List", items: workItems, path: "/Work" });
});

app.post("/Work", function (req, res) {
  const body = req.body;
  let newItem = body.newItem;
  workItems.push(newItem);
  res.redirect("/Work");
});
