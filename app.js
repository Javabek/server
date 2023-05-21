const { log } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");

//calling mongoDb
const db = require("./server").db();
const mongodb = require("mongodb");

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
  console.log("User entered / route");
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
  console.log("User entered /create-item route");

  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  })
});

app.post("/delete-item", (req,res)=> {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    {_id : new mongodb.ObjectId(id)},
    function (err,data){
      res.json({state :"success"})
    }
    );
  })
  
  app.post("/edit-item", (req,res)=> {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
      {_id : new mongodb.ObjectId(data.id)}, 
      {$set :{reja : data.new_input}},
      function(err,data) {
      res.json({state:"success"})
    })
  })

app.post("/delete-all", (req,res)=>{
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function (){
      res.json({state :"All plans deleted"})
    })
  }
})




app.get("/author", (req, res) => {
  res.render("author", { user: user });
})

module.exports = app;
 