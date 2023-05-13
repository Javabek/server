const express = require("express");
const app = express();
const fs = require("fs");

//calling mongoDb
const db = require("./server").db();

let user; 
fs.readFile("database/user.json","utf-8", (err,data)=>{
  if(err){
    console.log(err);
  }else{
    user = JSON.parse(data)
  }
})

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/hello", function (req, res) {
  res.end("<h1> Hello World </h1>")
});

app.get("/", function (req, res) {
  res.render("reja")
});

app.post("/create-item", (req, res) => {
  console.log(req.body.newItem);
  res.json({tets: "success"});
});

app.get("/author", (req, res) => {
res.render("author", {user:user});
})

module.exports = app;
