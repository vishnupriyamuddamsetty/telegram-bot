var Datastore = require("nedb");
var db = new Datastore({ filename: "datafile", autoload: true });

//var doc = {
//name: "VishnuPriya",
//emailId: "muddamsettyvishnu@gmail.com",
// dob: "13-10-02",
//};
//db.insert(doc, function (err, docc) {
// console.log(docc);
//});
db.find({}, function (err, docs) {
  console.log(docs);
});
