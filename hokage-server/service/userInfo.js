var express = require('express');
var router = express.Router();
var env = require('../config/env.js');

router.post('/', function(req, res, next) {
  var insertQuery = `insert into UserInfo (id, pw, email, region) values ('${req.body.id}', '${req.body.pw}', '${req.body.email}', '${req.body.region}')`;

  env.conn.query(insertQuery, req.body, function(error, data){
      if (!error) {
        res.send('success');
      } else {
        res.send('error');
        console.log(error);
      }
  })
});

module.exports = router;
