'use strict';
let messages = require('../config/messages');
let bkfd2Password = require('pbkdf2-password');

/* password hash variables */
let hasher = bkfd2Password({
  saltLength: 192, // byte size
  iterations: 100000,
  keyLength: 192, // byte size
  digest: 'sha256',
});

class PbkdfUtil {
  // plain password -> hashed password(base64 encoding), length : 256
  // salt(base64 encoding), length : 256
  static digestHash(userPw) {
    return new Promise((resolve, reject) => {
      hasher({
        password: userPw,
      }, (error, pass, salt, hash) => {
        if (!error)
          resolve({
            hash,
            salt
          });
        else
          reject({
            success: false,
            message: messages.hashError,
            error: error
          });
      })
    });
  }

  static verifyHash(inputPw, dbSalt, dbPw) {
    return new Promise((resolve, reject) => {
      hasher({
        password: inputPw,
        salt: dbSalt
      }, (error, pass, salt, hash) => {
        if (!error) {
          if (hash === dbPw) resolve();
          else
            reject({
              success: false,
              message: messages.invalidPw,
            });
        } else
          reject({
            success: false,
            message: messages.hashError,
            error: error
          });
      })
    })
  }
}

module.exports = PbkdfUtil;
