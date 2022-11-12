//jshint esversion:6
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var date = require(__dirname + "/date.js");

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
    
    var day = date.getDate();

    res.render("list", { listTitle: day, newListItems: items });
    //post request for the list
});
app.post("/", function (req, res) {

   let item = req.body.newItem;
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work",function(req,res){  
    res.render("list",{listTitle:"Work List",newListItems:workItems});
});
app.post("/work",function(req,res){
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/work");
});
app.get("/about",function(req,res){
  res.render("about");
});
app.listen(3000, function () {
    console.log("We are listening on port 3000");
});
