var express = require('express');
var router = express.Router();
var env = require('../config/env.js');

router.post('/', function(req, res, next) {
  var insertQuery = `insert into UserInfo (id, pw, email, region) values ('${req.body.id}', '${req.body.pw}', '${req.body.email}', '${req.body.region}')`;
  var selectQuery = `select * from UserInfo where id='${req.body.id}'`;
  var check = null;

  env.conn.query(selectQuery, function(error, data){
    if (data.length == 0) {
        env.conn.query(insertQuery, function(error, data) {
          if (!error) {
            check = 'success';
            res.send(check);
          }
          else {
            check = 'error';
            res.send(check);
            console.log(insertQuery)
          }
        })
    }
    else if (data.length != 0) {
      check = 'exist';
      res.send(check);
    }
  })

});

module.exports = router;
