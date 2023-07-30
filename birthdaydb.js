var Datastore = require("nedb");
var db = new Datastore({ filename: "datafile", autoload: true });

var doc = [
  {
    name: "Gayathri",
    phone: "999898888",
    dob: "09/12/2002",
    month: "December",
  },
  {
    name: "Vasu",
    phone: "9746928426",
    dob: "19/03/2003",
    month: "March",
  },
  {
    name: "Radha",
    phone: "99974658456",
    dob: "13/10/2002",
    month: "October",
  },
];

db.insert(doc, function (err, newDoc) {
  console.log("inserted succefully");
});
