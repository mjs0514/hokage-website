var express = require('express');
var router = express.Router();
var env = require('../../config/env.js');

router.post('/', function(req, res, next) {
  var query = `select * from UserInfo where id='${req.body.id}'`;
  var check = null;

  env.conn.query(query, function(error, data){
    if (data.length != 0) {
      var result = data[0];
      if (result.pw == req.body.pw) {
        check = 'verified';
        res.send(check);
      }
      else {
        check = 'incorrectPw';
        res.send(check);
      }
    }
    else if (data.length == 0) {
      check = 'unjoined';
      res.send(check);
    }
  })

});

module.exports = router;
