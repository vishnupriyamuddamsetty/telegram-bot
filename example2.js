var TelegramBot = require("node-telegram-bot-api");
var token = "5528132432:AAE42ZMyQfBfvoRJfB5PzAXxtIWafu7IwTM";
var bot = new TelegramBot(token, { polling: true });

bot.on("message", function (hi) {
  console.log(hi.text);
  var isPalindrome = require("is-palindrome");
  if (hi.text == "racecar") bot.sendMessage(hi.chat.id, "Yes,it is palindrom");
  else if (hi.text == 101) bot.sendMessage(hi.chat.id, "Yes, it is palindrom");
  else if (hi.text == "!@#$#@!")
    bot.sendMessage(hi.chat.id, "Yes, it is a palindrom");
});
