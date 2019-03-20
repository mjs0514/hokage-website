'use strict';

module.exports.set = function(app){
  app.use('/service/users', require('./users'));
  app.use('/service/userinfo', require('./userInfo'));
  app.use('/service/record/match', require('./record/match'));
  app.use('/service/auth/login', require('./auth/login'));
}
