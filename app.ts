//jshint esversion:6
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var items =[];
var workItems = [];
var item = "";
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
    var day = "";
  
    res.render("list", { listTitle: day, newListItems: items });
    //post request for the list
});
app.post("/", function (req, res) {
  var item = req.body.newItem;

   if(res.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    
  } else {
      items.push(item);
      res.redirect("/");
    
   }
});
app.get("/work",function(req,res){  
    res.render("list",{listTitle:"Work List",newListItems:items});
});
app.post("/work",function(req,res){
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/work");
});
app.listen(3000, function () {
    console.log("We are listening on port 3000");
});
