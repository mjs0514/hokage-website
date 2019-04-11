'use strict';

let express = require('express');
let router = express.Router();

/* directories */
router.use('/auth', require('./auth'));
router.use('/record', require('./record'));

/* .js */
router.use('/users', require('./users'));

module.exports = router;
