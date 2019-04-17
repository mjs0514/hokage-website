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

  static generateAuthToken(userId) {
    option.audience = userId;
    return new Promise((resolve, reject) => {
      jwt.sign(payload, env.secret, option, (error, token) => {
        if (!error)
          resolve(token);
        else {
          error.message = messages.generateTokenError;
          reject(error);
        }
      });
    });
  }

  static verify(token, userId) {
    let compareClaim = {
      audience: userId,
    };

    return new Promise((resolve, reject)=> {
      jwt.verify(token, env.secret, compareClaim, (error, decoded) => {
        if(!error){
          resolve(decoded);
        } else {
          reject(error);
        }
      })
    })
  }
}

module.exports = TokenUtil;
