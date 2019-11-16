import * as tmi from 'tmi.js';
import { BOT_USERNAME, BOT_OAUTH_TOKEN, BOT_CHANNELNAME } from './tokens'
import { COMMANDS } from './commandTypes'
import * as commands from './commands'

const opts = {
  identity: {
    username: BOT_USERNAME,
    password: BOT_OAUTH_TOKEN
  },
  channels: [
    BOT_CHANNELNAME
  ]
};

const client = new tmi.client(opts);
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();

let commandQueue = [];

function onMessageHandler(target, context, msg, self) {
  if (self) { return; }
  for (let commandType in COMMANDS) {
    for (let option in COMMANDS[commandType]) {
      if (msg.trim().toLowerCase().startsWith(COMMANDS[commandType][option])) {
        let commandToRun = Object.keys(commands);
        commandQueue.push(commands[commandToRun[commandToRun.indexOf(commandType.toString())]])
        break;
      }
    }
  }
}

let queueRunner = setInterval(() => {
  if (commandQueue.length > 0) {
      commandQueue[0].then(() => {
          console.log(commandQueue);
          commandQueue.shift();
      });
  }
}, 500);


function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}