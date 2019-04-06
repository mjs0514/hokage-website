'use strict';

var express = require('express');
var router = express.Router();
var env = require('../../config/env.js');
var jwt = require('jsonwebtoken');

//TODO 패스워드 암호화해서 보냈을테니 암호된 패스워드를 복호화 하도록 처리
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
router.post('/login', function(req, res) {
  const userid = req.body.userid;
  const password = req.body.password;
  const secret = env.secret;
  let payload = { // public, private claim
    data: 'test'
  };
  let option = { // registered claim
    issuer: 'hokage.ga',
    expiresIn: '1h',
    subject: 'authToken',
    audience: userid
  };

  let query = `select * from USER_INFO where id="${userid}"`;
  env.conn.query(query, function(error, data) {
    if (!error) {
      if (data.length) {
        if (data[0].pw === password) {
          //TODO util class로 감싸야함
          jwt.sign(payload, secret, option, function(err, token) {
            res.json({
              success: true,
              message: 'login success',
              authToken: token
            });
          });
        } else {
          res.json({
            success: false,
            message: 'login fail : password incorrect',
            authToken: 'none'
          });
        }
      } else {
        res.json({
          success: false,
          message: 'login fail : id incorrect',
          authToken: 'none'
        });
      }
    } else {
      res.json({
        success: false,
        message: error,
        authToken: 'none'
      });
    }
  });
});

module.exports = router;
