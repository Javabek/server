const express = require("express");
const app = express();
const http = require("http");


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/hello", function (req, res) {
  res.end("<h1> Hello World </h1>")
});

app.get("/", function (req, res) {
  res.render("harid")
});

app.post("/create-item", (req, res) => {
  console.log(req.body.newItem);
  res.json({tets: "success"});
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port ${PORT}`);
})