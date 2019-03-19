var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* service */

var movies = require('./routes/movies');
var login = require('./service/auth/login');
var userInfo = require('./service/userInfo');
var match = require('./service/record/match');
var users = require('./service/users');

var app = express(); // 익스프레스 객체 생성

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/service/movies', movies);
app.use('/service/auth/login', login);
app.use('/service/userinfo', userInfo);
app.use('/service/record/match', match);
app.use('/service/users', users);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(require('connect-history-api-fallback')());

module.exports = app;
