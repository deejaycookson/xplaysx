const express = require('express');
const axios = require('axios');
const { exec, spawn } = require('child_process');
let router = express.Router();
let queue  = [];
let python = spawn('python', ['keyboard.py']);

const tokens = require('../tokens.js')
const C1_ENDPOINT = "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts/create"
axios.defaults.headers.common['Authorization'] = tokens.C1_KEY;
axios.defaults.headers.common['version'] = "1.0";
axios.defaults.headers.common['Content-Type'] = "application/json";

const maps = ["b","up","down","left","right","start","select","l","r","a"];

const inputs = {
    "up": 1,
    "u": 1,
    "down": 2,
    "d": 2,
    "left": 3,
    "right": 4,
    "start": 5,
    "select": 6,
    "l": 7,
    "r": 8,
    "a": 9,
    "b": 0
};
const hash = require('hash-mod')(maps.length)

/* GET home page. */
router.post('/input', (req, res, next) => {
  	const input = req.body;
	if (input.hasOwnProperty("token") && input.hasOwnProperty("input")) 
	{
	    if (input.token !== "dansucksass")
	    {
	        error(res);
	    }
	    else
	    {
	        addToQueue(input.input.toLowerCase(), res)
	    }
	} 
	else 
	{
	    error(res);
	}
});

router.post('/change', (req, res, next) => {
	if (req.body.hasOwnProperty('input'))
		python.stdin.write(input + '\n');
});

router.post('/twilio', (req, res, next) => {
  	addToQueue(req.body.Body.toLowerCase(), res);
  	res.status(200).send();
});

const error = res => res.status(400).send();

const addToQueue = (input, res) => {
    if (inputs.hasOwnProperty(input))
    {
        queue.push(inputs[input]);
        res.status(200).send();
    }
    else if (input.toLowerCase() === "random")
    {
    	axios.post(C1_ENDPOINT, {"quantity": 1}).then(res => {
    		console.log(res.data.Accounts[0]);
    		let input = hash(JSON.stringify(res.data.Accounts[0]));
    		console.log(input);
		   	queue.push(input);
    	}).catch(err => {
    		console.log(err);
    	});
    }
    else error(res);
}

const send = () =>
{
	if (queue.length > 0) 
	{	
		console.log("Sending: " + queue[0] + " == " + maps[queue[0]]);
		python.stdin.write(queue.shift() + '\n');
	}
}

setInterval(send, 500);

module.exports = router;
