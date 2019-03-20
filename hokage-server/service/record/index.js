'use strict';

var express = require('express');
var router = express.Router();

router.use('/match', require('./match'));

module.exports = router;
