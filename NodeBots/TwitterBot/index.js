const Twitter = require('twit');
const config = require('./config.js.js');
const T = new Twitter(config);

//let stream = T.stream('statuses/filter', { track: ['@xplaysx2'] });
T.post('statuses/update', { status: 'API test!' }, (err, data, response) => {
        console.log(err, data, response);
    }
);

const tweetEvent = tweet => {

    // Who sent the tweet?
    var name = tweet.user.screen_name;
    // What is the text?
    // var txt = tweet.text;
    // the status update or tweet ID in which we will reply
    var nameID  = tweet.id_str;

     // Get rid of the @ mention
    // var txt = txt.replace(/@myTwitterHandle/g, "");
    //console.log(tweet.text);
};

//stream.on('tweet', tweetEvent);
