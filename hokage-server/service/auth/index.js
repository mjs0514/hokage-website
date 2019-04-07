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

var express = require('express');
var router = express.Router();
var env = require('../../config/env.js');
var jwt = require('jsonwebtoken');
var bkfd2Password = require('pbkdf2-password');

//TODO plain password -> hash(password) -> base64
//FIXME 전처리로 빼냐 안빼냐 차이를 보여주려고 일부로 안고침. 스터디 후에 고칠 예정
router.use('/login', function(req, res, next) {
  console.log('login service 전처리 미들웨어');
  next();
});

/*
  POST /service/auth/login,
  {
    userid,
    password
  }
*/
//TODO util class 만들기
//TODO express router 예외처리도 생각해서 적용하기
//FIXME callback 지옥
router.post('/login', function(req, res) {
  /* authToken variables */
  const secret = env.secret;

  let payload = { // public, private claim
    data: 'test'
  };

  let option = { // registered claim
    issuer: 'hokage.ga',
    expiresIn: '1h',
    subject: 'authToken',
    audience: req.body.id,
  };

  /* password hash variables */
  let hasher = bkfd2Password({
    saltLength: 192,
    iterations: 100000,
    keyLength: 192,
    digest: 'sha256',
  });

  let query = `select pw, salt from USER_INFO where id="${req.body.id}"`;
  env.conn.query(query, (error, data) => {
    if (!error) {
      if (data.length) {
        hasher({password:req.body.pw, salt: data[0].salt}, (hashError, pass, salt, hash) => {
          if(!hashError) {
            if (data[0].pw === hash) {
              //TODO util class로 감싸야함
              jwt.sign(payload, secret, option, function(err, token) {
                res.json({
                  success: true,
                  message: 'login success',
                  authToken: token,
                });
              });
            } else {
              res.json({
                success: false,
                message: 'login fail : password incorrect',
              });
            }
          } else {
            res.status(500).json({
              success: false,
              message: 'hash creation failed',
              error: hashError,
            });
          }
        })
      } else {
        res.json({
          success: false,
          message: 'login fail : id incorrect',
        });
      }
    } else {
      res.status(500).json({
        success: false,
        error: error,
      });
    }
  });
});

module.exports = router;
