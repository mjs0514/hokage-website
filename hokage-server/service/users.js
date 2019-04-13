/*
단건은 pk를 필수적으로 입력받도록 하는 서비스여야 한다. 즉 path parameter로 입력을 처리하게 하면 됨
다건은 전체인 경우와 일부인 경우로 나뉘는데 이 때 일부를 검색하는 것은 옵션이기 때문에 query string으로 처리

전체인지 일부인지를 구분하는 query string parameter를 둬도 되지만 그냥 아무 파라미터가 안들어오면 전체리스트 라고 판단하는게 더 자연스러움
만약 파라미터로 구분하려면 if문이 추가될 것이고 이것을 없애기 위해 서비스를 분리하게 되면 url이 복잡해진다.
*/
'use strict'
let express = require('express');
let router = express.Router();
let env = require('../config/env.js');
let messages = require('../config/messages');
let QueryUtil = require('../utils/query');

/* 다건 사용자 조회
method        : GET
url           : /service/users
query string  : region, password, lengthCheck
*/
router.get('/', function(req, res, next) {
  QueryUtil.lookupUserInfo(req.query.email, req.query.region, req.query.lengthCheck)
    .then((row) => {
      res.json({
        success: true,
        message: messages.lookupSuccess,
        user: row,
      })
    })
    .catch(next);
});

/* 단건 사용자 조회
method      : GET
url         : /service/users/
params      : id
query string: lengthCheck(default = false)
*/
router.get('/:id', function(req, res, next) {
  QueryUtil.lookupUser(req.params.id, req.query.lengthCheck)
    .then((row) => {
      res.json({
        success: true,
        message: messages.lookupSuccess,
        user: row[0],
      });
    })
    .catch(next);
});

/* 사용자 정보 등록
method    : POST
url       : /service/users/
req.body  : id, pw, email, region
*/

let PbkdfUtil = require('../utils/pbkdf');

router.use('/', function(req, res, next) {
  //회원가입 전처리
  //FIXME 입력 파라미터 필수적으로 입력했는지 검사
  next();
});

router.post('/', function(req, res, next) {
  PbkdfUtil.digestHash(req.body.pw)
    .then((data) => {
      return QueryUtil.insertUser(req.body.id, data.hash, req.body.email, req.body.region, data.salt);
    })
    .then((row) => {
      res.json({
        message: messages.registrationSuccess,
        user: row[0],
      })
    })
    .catch(next);
});

module.exports = router;
