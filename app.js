//jshint esversion:6
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var items =[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    var today = new Date();
    var day = "";
    /*   if(today.getDay()===6||today.getDay()===0){
        day="Weekend";
      }
      else{
       day = "Weekday";
      }
      switch (today.getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
          break;
        default:
          console.log("Error: current day is equal to: " + today.getDay());
        }
        */
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-IN", options);
    res.render("list", { kindOfDay: day, newListItems: items });
    //post request for the list
});
app.post("/", function (req, res) {
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});
app.listen(3000, function () {
    console.log("We are listening on port 3000");
});
