const commands = require('./commands');

const COMMANDS = {
    UP: ['up', 'u'],
    DOWN: ['down', 'd'],
    L: ['left', 'l'],
    R: ['right', 'r'],
    START: ['start'],
    SELECT: ['select', 'sel'],
    A: ['a'],
    B: ['b']
}

commandQueue = [];

module.exports.addCommand = (msg) => {
    for (let commandType in COMMANDS) {
        for (let option in COMMANDS[commandType]) {
            if (msg.toLowerCase().startsWith(COMMANDS[commandType][option])) {
                let commandToRun = Object.keys(commands);
                commandQueue.push(commands[commandToRun[commandToRun.indexOf(commandType.toString())]]);
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