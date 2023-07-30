var TelegramBot = require("node-telegram-bot-api");
var token = "5528132432:AAE42ZMyQfBfvoRJfB5PzAXxtIWafu7IwTM";
var bot = new TelegramBot(token, { polling: true });
bot.on("message", function (hello) {
  console.log(hello.text);
  if (hello.text == "gayathri")
    bot.sendMessage(hello.chat.id, "DOB:-09-12-2002\nrelation:-bestfriend");
  else if (hello.text == "madhupriya")
    bot.sendMessage(hello.chat.id, "DOB:-17-03-2003\nrelation:-buddy");
  else if (hello.text == "hai") bot.sendMessage(hello.chat.id, "hello");
  else if (hello.text == "how are you?")
    bot.sendMessage(
      hello.chat.id,
      "i am feeling great, Thanks for asking.\nWhat about you?"
    );
  else
    bot.sendMessage(
      hello.chat.id,
      "didn't get you ,please recheck your message!!!"
    );
});
