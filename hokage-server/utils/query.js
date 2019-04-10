'use strict'
var env = require('../config/env');

//FIXME query를 이용해서 특정 쿼리 날리는 정적 함수를 제공하도록 수정
//TODO ORM 적용하기, 특히 table명 같은거 문자열로 두지말고 변수명으로 둘 수 있도록

class QueryUtil {

  static lookupUserPWandSalt(userId) {
    return `select pw, salt from USER_INFO where id="${userId}"`;
  }
  static insertUser(userId, userPw, userEmail, userRegion, userSalt) {
    return `insert into USER_INFO (id, pw, email, region, salt) values('${userId}', '${userPw}', '${userEmail}', '${userRegion}', '${userSalt}')`;
  }

  static query(queryString, dataNullMessage, queryFailMessage) {
    return new Promise((resolve, reject) => {
      env.conn.query(queryString, (error, data) => {
        if (!error) {
          if (data)
            resolve(data);
          else
            reject({
              success: false,
              message: dataNullMessage,
            });
        } else
          reject({
            success: false,
            message: queryFailMessage,
            error: error,
          });
      });
    });
  }
}

module.exports = QueryUtil;
