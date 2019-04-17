var express = require('express');
var router = express.Router();
var env = require('../../config/env.js');
let QueryUtil = require('../../utils/query');
let messages = require('../../config/messages');

router.get('/:id', function(req, res, next) {
  QueryUtil.findMatchWithId(req.params.id)
    .then((data) => {
      res.json({
        success: true,
        message: messages.lookupSuccess,
        match: data,
      });
    })
    .catch(next);
});
module.exports = router;
