var express = require('express');
var router = express.Router();
let queue=[];

/* GET home page. */
router.post('/input', (req, res, next) => {
  const inputs = req.body;

if (inputs.hasOwnProperty("token") && inputs.hasOwnProperty("input")) {

    if(inputs.token!=="dansucksass"){

      error(res);

    }else{
      addtoqueue(inputs.input,res)

    }
} else {

    error(res);

}
});

router.post('/twilio', (req, res, next) => {
  console.log(req.body);
  addtoqueue(req.body.body,res);

});

function error (res){
  res.status(400).send();
}

function addtoqueue(input,res){
  switch(input){
    case "up":
      queue.push(1);
      console.log("1 added");
      break;
    case "down":
      queue.push(2);
      console.log("2 added");
      break;
    case "left":
      queue.push(3);
      console.log("3 added");
      break;
    case "right":
      queue.push(4);
      console.log("4 added");
      break;
    case "start":
      queue.push(5);
      console.log("5 added");
      break;
    case "select":
      queue.push(6);
      console.log("6 added");
      break;
    case "l":
      queue.push(7);
      console.log("7 added");
      break;
    case "r":
      queue.push(8);
      console.log("8 added");
      break;
    case "a":
      queue.push(9);
      console.log("9 added");
      break;
    case "b":
      queue.push(10);
      console.log("10 added");
      break;
    default:
      error(res);
      break;
  }
  res.status(200).send();
}
module.exports = router;
