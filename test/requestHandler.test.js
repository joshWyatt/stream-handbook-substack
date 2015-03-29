var http = require('http');
var request = require('request');
var test = require('tape-catch');

var requestHandler = require('../requestHandler.js');
var port = +process.argv.slice()[2] | 8001;


test('requestHandler.js', function(t){

  var server = http.createServer(requestHandler).listen(port, function(){
    t.comment('Test server running');

    request('http://localhost:' + port, function(err, res, body){
      t.equal(body, 'heyo', 'It should send a response of \'heyo\'');

      server.close();
      t.comment('Test server shutting down');
    });
    
  });

  t.end();
});