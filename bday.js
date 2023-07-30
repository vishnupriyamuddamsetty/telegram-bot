var TelegramBot = require("node-telegram-bot-api");
var Datastore = require("nedb");
var db = new Datastore({ filename: "datafile", autoload: true });

// replace the value below with the Telegram token you receive from @BotFather
var token = "5528132432:AAE42ZMyQfBfvoRJfB5PzAXxtIWafu7IwTM";

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });

bot.on("message", function (msg) {
  db.find({ dob: msg.text }, function (err, docs) {
    for (var i = 0; i < docs.length; i++) {
      console.log(docs[i]);
      bot.sendMessage(msg.chat.id, docs[i].name + " " + docs[i].dob);
    }
  });
});
