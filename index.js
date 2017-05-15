// zoals steeds "requiren" wat je wil gebruiken
var express = require("express");
var path = require("path");
request = require('request-json');
var app = express();
var postsFile = require('./data/posts.json');
const instagramPosts = require('instagram-posts');
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));


app.use(express.static('public'))

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get('/instagram', function(req, res) {
  instagramPosts('dondiablo_family').then(afbeeldingen => {
console.log(afbeeldingen);
      res.render("instagram", {
        afbeeldingen: afbeeldingen
      });
  });
});





app.listen(app.get('port'), function() { });
