import express from 'express';
import { exec } from 'child_process'
let router = express.Router();
let queue = [];

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

exec('sudo apt install visualboyadvance xdotool', (error, stdout, stderr) => {
    console.log(error, stdout, stderr);
});


/* GET home page. */
router.get('/input', (req, res, next) => {
  const inputs = req.body;

    if (inputs.hasOwnProperty("token") && inputs.hasOwnProperty("input")) 
    {
        if (inputs.token !== "dansucksass")
        {
            error(res);
        }
        else
        {
            addToQueue(inputs.input,res)
        }
    } 
    else 
    {
        error(res);
    }
});

router.post('/twilio', (req, res, next) => {
  console.log(req);
  addtoqueue(req.body.body,res);
});

const error = res => res.status(400).send();

const addToQueue = (input, res) => {
    if (inputs.hasOwnProperty(input))
    {
        queue.push(inputs[input]);
        res.status(200).send();
    }
    else error(res);
}
module.exports = router;
