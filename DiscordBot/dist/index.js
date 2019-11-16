'use strict';

var _tokens = require('./tokens');

var _commandTypes = require('./commandTypes');

var _commands = require('./commands');

var commands = _interopRequireWildcard(_commands);

var _discord = require('discord.js');

var Discord = _interopRequireWildcard(_discord);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var client = new Discord.Client();

client.on('ready', function () {
    console.log('Logged in as ' + client.user.tag + '!');
});

var commandQueue = [];

client.on('message', function (msg) {
    for (var commandType in _commandTypes.COMMANDS) {
        for (var option in _commandTypes.COMMANDS[commandType]) {
            if (msg.content.toLowerCase().startsWith(_commandTypes.COMMANDS[commandType][option])) {
                var commandToRun = Object.keys(commands);
                commandQueue.push(commands[commandToRun[commandToRun.indexOf(commandType.toString())]]);
                break;
            }
        }
    }
    console.log(commandQueue);
});

var queueRunner = setInterval(function () {
    if (commandQueue.length > 0) {
        commandQueue[0].then(function () {
            console.log(commandQueue);
            commandQueue.shift();
        });
    }
}, 500);

client.login(_tokens.BOT_CLIENT_TOKEN);