var Datastore = require("nedb");
var db = new Datastore({ filename: "newsdb1", autoload: true });

var doc = [
  {
    category: "Broadcast",
    news: "\nPM to Kharge on being elected Cong president: May he have a fruitful tenure",
    updatedTime: "\nUpdated on Oct 19, 2022 06:04 PM IST",
    country: "\nIndia",
    Newscoveredby: "\n- By Mohan Kumar",
  },
  {
    category: "Business",
    news: "\nNestle, HDFC, NTPC, State Bank of India among top gainers & losers as market ends higher",
    updatedTime: "\nUpdated on Oct 19, 2022, 5:13 PM IST",
    country: "\nIndia",
    Newscoveredby: "\n- By Sai Krishna",
  },
  {
    category: "Entertainment",
    news: "\nVihaan Samat: Screen time will never be insufficient if character is strong -By mismatchedseason2 actor",
    updatedTime: "\nUpdated on Oct 19, 2022 06:40 PM IST",
    country: "\nIndia",
    Newscoveredby: "\n- By Kiran",
  },
  {
    category: "Investigative",
    news: "\nEkbalpore clashes: NIA registers FIR",
    updatedTime: "\nUpdated on Oct 19, 2022, 08:28 IST",
    country: "\nIndia",
    Newscoveredby: "\n- By Rathod",
  },
  {
    category: "Opinion",
    news: "\nTOI exclusive: Sri Lanka president's visit — India-Sri Lanka .",
    updatedTime: "\nUpdated on Feb 14, 2015, 17:28 IST",
    country: "\nIndia",
    Newscoveredby: "\n- By Ram madhav",
  },
  {
    category: "Photo",
    news: "\nPride of Mamata's fleet",
    updatedTime: "\nUpdated on 14 May 2013, 11:43 IST",
    country: "\nIndia",
    Newscoveredby: "\n- By Ramesh Gupta",
  },
  {
    category: "Political",
    news: "\nCongress presidential polls energised cadre: Shashi Tharoor",
    updatedTime: "\nUpdated on Oct 19, 2022, 18:18 IST",
    country: "\nIndia",
    Newscoveredby: "\n- By PTI",
  },
  {
    category: "Sports",
    news: "\nT20 World Cup: Rain washes out India's second warm-up game a ",
    updatedTime: "\nUpdated on Oct 19, 2022, 14:48 IST",
    country: "\nIndia",
    Newscoveredby: "\n- By PTI",
  },
  {
    category: "Watchdog",
    news: "\nNew Zealand watchdog lays charges over volcano deaths",
    updatedTime: "\nUpdated on Nov 30, 2020, 08:56 IST",
    country: "\nNew Zealand",
    Newscoveredby: "\n- By AFP",
  },
];

db.insert(doc, function (err, newDoc) {
  console.log("inserted succefully");
});
