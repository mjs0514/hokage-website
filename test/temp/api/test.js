var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
      console.log('Time: ', Date.now());
      next();
});
// 지문 가져오기 서비스
router.get('/', function(req, res) {
      res.send('test root');
});

module.exports = router;
