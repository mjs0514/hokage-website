var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log('id : ' + req.body.id);
  console.log('pw : ' + req.body.password);  
  var check = null;
  if (req.body.id === "123"){
    check='ok';
    res.send(check);
  } else {
    check='no';
    res.send(check);
  }
});

module.exports = router;
