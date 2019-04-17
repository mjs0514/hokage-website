'use strict'
let env = require('../config/env');
let messages = require('../config/messages');

//TODO ORM 적용하기, 특히 table명 같은거 문자열로 두지말고 변수명으로 둘 수 있도록

class QueryUtil {

  static findMatchWithId(userId) {
    let qs = `select * from RECORD_PLAYER where user_id ="${userId}"`;
    return query(qs, messages.invalidQuery, true, messages.noFoundMatch);
  }
  static lookupUserPWandSalt(userId) {
    let qs = `select pw, salt from USER_INFO where id="${userId}"`;
    return query(qs, messages.invalidQuery, true, messages.invalidId);
  }

  static insertUser(userId, userPw, userEmail, userRegion, userSalt) {
    let qs = `insert into USER_INFO (id, pw, email, region, salt) values("${userId}", "${userPw}", "${userEmail}", "${userRegion}", "${userSalt}")`;
    return query(qs, messages.registrationFail);
  }

  static deleteUser(userId) {
    let qs = `delete from USER_INFO where id="${userId}"`;
    return query(qs, messages.invalidQuery);
  }

  //lengthCheck - true : data의 길이를 check해서 0이면 reject, 1이상이면 resolve
  static lookupUser(userId, lengthCheck) {
    let qs = `select id, email, region from USER_INFO where id="${userId}"`;
    return query(qs, messages.invalidQuery, lengthCheck, messages.notFoundUser);
  }

  //FIXME 쿼리스트링 파라미터가 늘어나면 날 수록 if문이 많아짐 -> ORM으로 해결할 수 있음
  static lookupUserInfo(userEmail, userRegion, lengthCheck) {
    let qs = `select id, email, region from USER_INFO where 1=1 `;

    if (userEmail !== undefined) {
      qs = qs.concat(`AND email="${userEmail}" `);
    }

    if (userRegion !== undefined) {
      qs = qs.concat(`AND region="${userRegion}" `);
    }

    return query(qs, messages.invalidQuery, lengthCheck, messages.notFoundUser);
  }
}

/*
모든 쿼리에 대해서 비동기적으로 에러와 정상인 경우를 처리하도록 만든 기본 함수
private 메소드처럼 사용하기 위해 class 외부로 이동
client 쪽에서는 static 메소드만 호출할 수 있도록 제공하며, 필요하다면 static 메소드로 이동해도 됨
*/
function query(queryString, queryFailMessage, lengthCheck, dataNullMessage) {
  return new Promise((resolve, reject) => {
    env.conn.query(queryString, (error, data) => {
      if (!error) {
        if (lengthCheck && data.length === 0) {
          reject({
            success: false,
            message: dataNullMessage,
          });
        }
        resolve(data);
      } else {
        error.message = queryFailMessage;
        reject(error);
      }
    });
  });
}

module.exports = QueryUtil;
