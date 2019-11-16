var express = require('express');
var router = express.Router();
let queue=[];

/* GET home page. */
router.get('/input', (req, res, next) => {
  const inputs = req.body;

if (inputs.hasOwnProperty("token") && inputs.hasOwnProperty("input")) {

    if(inputs.token!=="dansucksass"){

      error(res);

    }else{

      switch(inputs.input){
        case "up":
          queue.push(1);
          break;
        case "down":
          queue.push(2);
          break;
        case "left":
          queue.push(3);
          break;
        case "right":
          queue.push(4);
          break;
        case "start":
          queue.push(5);
          break;
        case "select":
          queue.push(6);
          break;
        case "l":
          queue.push(7);
          break;
        case "r":
          queue.push(8);
          break;
        case "a":
          queue.push(9);
          break;
        case "b":
          queue.push(10);
          break;
        default:
          error(res);
          break;
      }
      res.status(200).send();

    }
} else {

    error(res);

}
});

function error (res){
  res.status(400).send();
}
module.exports = router;
