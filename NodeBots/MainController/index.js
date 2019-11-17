const rp = require('request-promise');

const COMMANDS = {
    up: ['up', 'u'],
    down: ['down', 'd'],
    left: ['left'],
    right: ['right'],
    start: ['start'],
    select: ['select', 'sel'],
    a: ['a'],
    b: ['b'],
    l: ['l'],
    r: ['r'],
    random: ['random', 'rand'],
    anarchy: ['anarchy'],
    democracy: ['democracy']
}

const makeReq = x => {
    let options = {
        method: 'POST',
        uri: 'http://35.242.157.210:3000/input',
        headers: {
            'Content-Type': 'application/json'
        },
        json: true,
        body: {
            "input": x,
            "token": "dansucksass"
        }
    };
    rp(options).then(() => {
        return x;
    }).catch(function (err) {
        console.log(err);
    });
};

commandQueue = [];

module.exports.addCommand = (msg) => {
    for (let commandType in COMMANDS) {
        for (let option in COMMANDS[commandType]) {
            if (msg.toLowerCase().startsWith(COMMANDS[commandType][option])) {
                commandQueue.push(commandType.toString());
            }
        }
    }
}

let queueRunner = setInterval(() => {
    if (commandQueue.length > 0) {
        makeReq(commandQueue[0]);
        commandQueue.shift();
    }
}, 500);