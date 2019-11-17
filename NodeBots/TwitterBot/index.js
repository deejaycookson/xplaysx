const http = require('request');
require('pipe').install()
const queueController = require('../MainController/index')
const tokens=require('./tokens');

let options = {
    url: 'https://api.twitter.com/labs/1/tweets/stream/filter?format=detailed',
    headers: {
        'Authorization': tokens.TWITTERTOKEN
    }
};

http.get(options).on('response', (res) => {
    res.on('data', function(chunk) {
        try {
            var data = chunk.toString();
            var d = JSON.parse(data);
            var array = d.data.entities.hashtags;
            console.log(array);
            array.forEach(l => command(l.tag));
        }catch(e){

        }
    });
})

function command(input){
    console.log(input);
    queueController.addCommand(input);
}
