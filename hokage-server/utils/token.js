'use strict'
let env = require('../config/env.js');
let jwt = require('jsonwebtoken');
let messages = require('../config/messages');

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
          resolve(token);
        else
          reject({
            success: false,
            message: messages.generateTokenError,
            error: error,
          });
      });
    });
  }
}

module.exports = TokenUtil;
