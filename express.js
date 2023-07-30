var express = require("express");
var app = express();
var Datastore = require("nedb");
var db = new Datastore({ filename: "databse", autoload: true });

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("Hai");
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.get("/loginsubmit", function (req, res) {
  var email = req.query.email;
  var password = req.query.password;
  var doc = {
    email: email,
    password: password,
  };

  db.find(doc, function (err, docs) {
    console.log(docs);
    if (docs.length > 0) {
      db.find({}, function (err, docs) {
        res.render("index", { res: docs });
      });
    } else {
      res.send("failed");
    }
  });
});

app.get("/searchby", function (req, res) {
  var name = req.query.seachterm;
  console.log(name);
  db.find({ fullname: name }, function (err, docs) {
    console.log(docs);
    res.render("search", { res: docs });
  });
});

app.get("/singup", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.get("/singupSubmit", function (req, res) {
  var email = req.query.email;
  var password = req.query.pswd;
  var fullname = req.query.fullName;
  var phone = req.query.phone;
  var address = req.query.add;

  var doc = {
    email: email,
    password: password,
    fullname: fullname,
    phone: phone,
    address: address,
  };

  db.insert(doc, function (er, docc) {
    res.send("signup successfylly");
  });
});

app.get("/home", function (req, res) {
  res.render("index");
});

app.listen("3000");
