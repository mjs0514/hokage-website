var express = require('express');
var http = require('http');
var fp = require('./api/auth/bio/fingerprint');
var app = express();
app.use('/api/auth/bio/fingerprint', fp);

var server = http.createServer(app);



app.get('/', function(req, res){
  var jsonObject = {
    "testkey" : "testvalue"
  }

  res.json(jsonObject);


});

app.get('/start', function(req, res){
  res.send('start page');
  test('/test.js');
});

server.listen(3000, '127.0.0.1', function(){
  console.log('Server listen on port ' + server.address().port);
});

function test(path){
    var testPath = require('./api'+path);
    app.use('/test', testPath);
}
