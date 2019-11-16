const express = require('express');
let { exec, spawn } = require('child_process');
let router = express.Router();
let queue  = [];
let python = spawn('python', ['keyboard.py']);


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
    "b": 10
};

/* GET home page. */
router.post('/input', (req, res, next) => {
  const inputs = req.body;

    if (inputs.hasOwnProperty("token") && inputs.hasOwnProperty("input")) 
    {
        if (inputs.token !== "dansucksass")
        {
            error(res);
        }
        else
        {
            addToQueue(inputs.input, res)
        }
    } 
    else 
    {
        error(res);
    }
});

router.post('/twilio', (req, res, next) => {
  	console.log(req.body);
  	addToQueue(req.body.Body, res);
  	res.status(200).send();
});

const error = res => res.status(400).send();

const addToQueue = (input, res) => {
	console.log("addToQueue - " + input);
    if (inputs.hasOwnProperty(input))
    {
    	console.log("actually addding");
        queue.push(inputs[input]);
        console.log(queue);
        res.status(200).send();
    }
    else error(res);
}

const send = () =>
{
	if (queue.length > 0) 
	{	
		console.log("Sending: " + queue[0]);
		python.stdin.write(queue.shift() + '\n');
	}
}

setInterval(send, 500);

module.exports = router;
