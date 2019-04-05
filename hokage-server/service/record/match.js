var express = require('express');
var router = express.Router();
var env = require('../../config/env.js');

router.post('/', function(req, res, next) {

  //var query = `select * from RECORD_MATCH where match_id='${req.body.id}'`;
  var query = `select * from RECORD_PLAYER where user_id=${req.body.id}`;
  var check = null;
  console.log(query);
  env.conn.query(query, function(error, data) {
    //   if (data.length != 0) {
    //     res.send.data;
    //   }
    //   else if (data.length == 0) {
    //     res.send(data);
    //   }
    // })
    console.log(data);
    res.send(data);
  })
});
module.exports = router;
