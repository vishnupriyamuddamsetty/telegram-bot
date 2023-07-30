var TelegramBot = require("node-telegram-bot-api");
var token = "5528132432:AAE42ZMyQfBfvoRJfB5PzAXxtIWafu7IwTM";
var bot = new TelegramBot(token, { polling: true });
bot.on("message", function (hello) {
  if (hello.text % 2 == 0) {
    bot.sendMessage(hello.chat.id, "even");
  } else {
    bot.sendMessage(hello.chat.id, "odd");
  }
});
