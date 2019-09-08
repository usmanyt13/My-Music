const Discord = require('discord.js');

const bot = new Discord.Client();

const TOKEN = ('NjE5OTQyNDUyMzA4MjEzNzcz.XXTcBg.QFkDk1BucOZsluGXLZ4uRjJnT5Q');

bot.on("ready", function() {
    console.log("ready");
    bot.user.setGame("Nothing");

});

bot.on("message", function(message) {
    if (message.auther.equals(bot.user)) return;

    if (message.content ==  'hello') {
        message.channel.sendMessage("Hi, There!");
    }
});
bot.login(TOKEN);
