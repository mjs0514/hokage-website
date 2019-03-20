'use strict';

var express =require('express');
var router = express.Router();

/* directories */
router.use('/auth', require('./auth'));
router.use('/record', require('./record'));

/* .js */
router.use('/users', require('./users'));
router.use('/userinfo', require('./userInfo'));

module.exports = router;
