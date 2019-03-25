var express = require('express');
var router = express.Router();
var env = require('../config/env.js');


/*
단건은 pk를 필수적으로 입력받도록 하는 서비스여야 한다. 즉 path parameter로 입력을 처리하게 하면 됨
다건은 전체인 경우와 일부인 경우로 나뉘는데 이 때 일부를 검색하는 것은 옵션이기 때문에 query string으로 처리

전체인지 일부인지를 구분하는 query string parameter를 둬도 되지만 그냥 아무 파라미터가 안들어오면 전체리스트 라고 판단하는게 더 자연스러움
만약 파라미터로 구분하려면 if문이 추가될 것이고 이것을 없애기 위해 서비스를 분리하게 되면 url이 복잡해진다.
*/


/* 다건 사용자 조회
method : GET
url : /service/users
params : none
query string : region, password
*/
// 단점 : 쿼리스트링 파라미터가 늘어나면 날 수록 if문이 많아짐 -> 쿼리문으로 해결하고 싶었는데 못찾음
router.get('/', function(req, res) {
  let query = 'select * from USER_INFO where 1=1 ';

  if(req.query.email !== undefined) {
    query = query.concat(`AND email="${req.query.email}" `)
  }

  if(req.query.region !== undefined) {
    query = query.concat(`AND region="${req.query.region}" `);
  }

  console.log(query);

  env.conn.query(query, function(error, data){
    console.log(data);
    console.log(error);
  });

  res.send('다건 사용자 조회 완료\n');
});

/* 단건 사용자 조회
method : GET
url : /service/users/
params : id
query string : none
*/
router.get('/:id', function(req, res) {
  env.conn.query(`select * from USER_INFO where id="${req.params.id}"`, function(error, data){
    if (data.length == 0) {
      res.send('noexist');
    }
    else {
      res.send(data[0]);
    }
  });
});

/* 사용자 정보 등록
method : POST
url : /service/users/
params : id, pw, email, region
query string : none
*/
router.post('/', function(req, res, next) {
  var insertQuery = `insert into USER_INFO (id, pw, email, region) values ('${req.body.id}', '${req.body.pw}', '${req.body.email}', '${req.body.region}')`;

  env.conn.query(insertQuery, req.body, function(error, data){
      if (!error) {
        res.send('success');
      } else {
        res.send('error');
        console.log(error);
      }
  })
});

module.exports = router;