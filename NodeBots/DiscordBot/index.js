import { BOT_CLIENT_TOKEN } from './tokens'
import { COMMANDS } from '../../commandTypes'
import * as commands from '../../commands'
import * as Discord from 'discord.js'

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

let commandQueue = [];

client.on('message', msg => {
    for (let commandType in COMMANDS) {
        for (let option in COMMANDS[commandType]) {
            if (msg.content.toLowerCase().startsWith(COMMANDS[commandType][option])) {
                let commandToRun = Object.keys(commands);
                commandQueue.push(commands[commandToRun[commandToRun.indexOf(commandType.toString())]])
                break;
            }
        }
    }
});

let queueRunner = setInterval(() => {
    if (commandQueue.length > 0) {
        commandQueue[0].then(() => {
            console.log(commandQueue);
            commandQueue.shift();
        });
    }
}, 500);

client.login(BOT_CLIENT_TOKEN);