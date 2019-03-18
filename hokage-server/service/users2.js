var express = require('express');
var router = express.Router();
var env = require('../config/env.js');

/*
사용자 조회
인자들은 모두 optional -> 입력해도 그만 안해도 그만

모든 인자를 입력하지 않으면 전체 사용자 조회
입력한 인자가 있다면 조건을 만족하는 값을 배열로 반환
*/

router.get('/', function(req, res) {
  //유저 조회 서비스의 경우엔 id를 필수적으로 입력하게 해버리면 옵션 파라미터들이 의미가 없게 되므로 이상한 설계가 됨
  //let query = `select * from UserInfo where id="${req.params.id}" `;

  let query = `select * from UserInfo where 1=1 `;

  if(req.query.id !== undefined) {
    query = query.concat(`AND id="${req.query.id}" `);
  }

  if(req.query.email !== undefined) {
    query = query.concat(`AND email="${req.query.email}" `);
  }

  if(req.query.region !== undefined) {
    query = query.concat(`AND region="${req.query.region}" `);
  }

  console.log(query);

  env.conn.query(query, function(error, data){
    console.log(data);
    console.log(error);
  });

  res.send('사용자 조회 완료\n');
});

module.exports = router;
