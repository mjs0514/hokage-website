'use strict';
let bkfd2Password = require('pbkdf2-password');

/* password hash variables */
let hasher = bkfd2Password({
  saltLength: 192, // byte size
  iterations: 100000,
  keyLength: 192, // byte size
  digest: 'sha256',
});

//FIXME 추후에 메세제 관련 js 파일을 만들어서 메세지 모두 한파일에 모으기
let resMessage = {
  hashError: 'hash creation failed',
};

class PbkdfUtil {
  // plain password -> hashed password(base64 encoding), length : 256
  // salt(base64 encoding), length : 256
  static hash(userPw) {
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
            message: resMessage.hashError,
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
              message: 'Login Fail : Password Incorrect',
            });
        } else
          reject({
            success: false,
            message: resMessage.hashError,
            error: error
          });
      })
    })
  }
}

module.exports = PbkdfUtil;
