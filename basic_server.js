var http = require('http');
var fs = require('fs');
var requestHandler = require('./requestHandler.js');
var port = +process.argv.slice()[2] || 8888;

http.createServer(requestHandler).listen(port, function(){
  console.log('listening on %d', port);
});