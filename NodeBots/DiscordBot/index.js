const tokens = require('./tokens.js')
const Discord = require('discord.js')
const queueController = require('../MainController/index')

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if(msg.content.startsWith('~')){
        msg.reply("Commands are: up, down, left, right, start, select, l, r, a, b, random. Go to: https://www.twitch.tv/xplaysx.online").delete(5000);
        return;
    }
    queueController.addCommand(msg.content);
});

client.login(tokens.BOT_CLIENT_TOKEN);