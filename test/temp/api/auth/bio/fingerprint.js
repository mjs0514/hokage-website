var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
      console.log('Time: ', Date.now());
      next();
});
// 지문 가져오기 서비스
router.get('/', function(req, res) {
      res.send('finger print root');
});
// 지문 정보 조회 서비
router.get('/:test1', function(req, res) {
      res.send('test1'+req.params.test1);
});


router.get('/:test2/:test3', function(req, res) {
      //res.send('test2'+req.params.test2+req.params.test3);
      res.json(req.params.test3);
});

//지문 생성 서비스
router.post('/fingerprint', function(req, res) {
      res.send('create');
});

module.exports = router;
