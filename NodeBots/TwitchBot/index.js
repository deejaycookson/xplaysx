const tmi = require('tmi.js');
const tokens = require('./tokens')
const queueController = require('../MainController/index')

const opts = {
  identity: {
    username: tokens.BOT_USERNAME,
    password: tokens.BOT_OAUTH_TOKEN
  },
  channels: [
    tokens.BOT_CHANNELNAME
  ]
};

const client = new tmi.client(opts);
client.on('message', onMessageHandler);
client.connect();

function onMessageHandler(target, context, msg, self) {
  if (self) { return; }
  queueController.addCommand(msg.trim());
}