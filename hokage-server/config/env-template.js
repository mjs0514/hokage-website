/*
port는 int이므로 ''없이 숫자 입력
secret : authToken 만들 key
*/

'use strict'

module.exports = {
  conn: require('mysql').createConnection({
    host: '',
    user: '',
    password: '',
    port: ,
    database: ''
  }),
  secret: ''
}
