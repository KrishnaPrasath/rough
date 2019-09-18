const express = require("express");
const app = express();
const mongoose = require("mongoose");
var parser = require("body-parser");
let { User } = require("./model");

mongoose.Promise = global.Promise;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true
});

app.get("/getData", function(req, res) {
  User.find().then(data => {
    res.json(data);
  });
});

app.post("/postData", function(req, res) {
  request = req.body;
  let user = new User(request);
  user.save().then(function(user) {
    console.log(user);
    res.send(true);
  });
});

app.listen(3001);
