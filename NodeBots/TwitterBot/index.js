const http = require('request');
const rp = require('request-promise');
require('pipe').install()

let options = {
    url: 'https://api.twitter.com/labs/1/tweets/stream/filter?format=detailed',
    headers: {
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAACOXAwEAAAAAVi0rUyFJ892lwO27%2FvtBPNw7G9A%3DVmItgu7qrnTzmPyrN7R13ttNvDURPvT4rQMxQ8ZWaR6NQWGjZW'
    }
};

http.get(options).on('response', (res) => {
    res.on('data', function(chunk) {
        console.log(chunk.toString());
    });
})

function data(input){
    
}
