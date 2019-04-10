'use strict'
var env = require('../config/env.js');
var jwt = require('jsonwebtoken');

/* authToken variables */
let payload = { // public, private claim
  data: 'test'
};

let option = { // registered claim
  issuer: 'hokage.ga',
  expiresIn: '1h',
  subject: 'authToken',
  audience: '',
};

class TokenUtil {

  static generateAuthToken(userId){
    option.audience = userId;
    return new Promise((resolve, reject) => {
      jwt.sign(payload, env.secret, option, (error, token) => {
        if(!error)
          resolve({
            success: true,
            message: 'Login Success',
            authToken: token,
          });
        else
          reject({
            success: false,
            message: 'Fail Generate Auth Token',
            error: error,
          });
      });
    });
  }
}

module.exports = TokenUtil;
