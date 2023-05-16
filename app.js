const { log } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");

//calling mongoDb
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    user = JSON.parse(data)
  }
})

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");


app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong")
      } else {
        res.render("reja", { items: data })
      }
    })
});

app.post("/create-item", (req, res) => {
  console.log("user entered create-item");

  const new_reja = req.body.reja
  db.collection("plans").insertOne({ reja: new_reja }, (err, data1) => {
    res.json(data1.ops[0])
  })
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
})

module.exports = app;
