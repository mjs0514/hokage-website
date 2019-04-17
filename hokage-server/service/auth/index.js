/*
login 서비스를 왜 auth/index.js에 만든 이유는?
login.js를 만든 다는 것은 login 모듈을 만든다는 의미라고 생각
하지만 login 모듈이라고 하기엔 만들만한 서비스가 없었다
ex) GET /service/auth/login
    PUT /service/auth/login
    DELETE /service/auth/login
    위와 같은 rest api가 필요한가??

그래서 별도의 모듈이라는 생각보다는 auth 모듈의 하나의 서비스라고 생각했다.
*/
'use strict';

let express = require('express');
let router = express.Router();
let messages = require('../../config/messages');

/* 로그인 서비스
method : POST
url : /service/auth/login
req.body : id, pw
*/

router.use('/login', function(req, res, next) {
  //console.log('login service 전처리 미들웨어');
  next();
});

let QueryUtil = require('../../utils/query');
let PbkdfUtil = require('../../utils/pbkdf');
let TokenUtil = require('../../utils/token');

router.post('/login', function(req, res, next) {
  QueryUtil.lookupUserPWandSalt(req.body.id)
    .then((row) => {
      return PbkdfUtil.verifyHash(req.body.pw, row[0].salt, row[0].pw);
    })
    .then(() => {
      return TokenUtil.generateAuthToken(req.body.id)
    })
    .then((token) => {
      res.json({
        success: true,
        message: messages.loginSuccess,
        authToken: token,
      });
    })
    .catch(next);
});

/*
인증된 사용자만 호출할 수 있는 테스트 서비스
header : token

TODO: Http header Authentication vs x-access-token ??
*/
router.use('/test', function(req, res, next) {
  if(req.headers.authorization === undefined){
    res.status(401).json({
      message: 'Authorization is undefined',
    });
    return;
  }

  let token = req.header('Authorization').split(' ')[1]; // == req.headers.authorization
  TokenUtil.verify(token)
    .then((decoded) => {
      req.decoded = decoded;
      next();
    })
    .catch((error) => {
      error.status = 401;
      next(error);
    });
})

router.get('/test', function(req, res, next) {
  //사용자가 인증된 사용자인 경우에만 실행되게 하고 싶은 서비스
  res.json({
    success: true,
    message: 'verify user token',
    decoded: req.decoded,
  });
});

module.exports = router;
