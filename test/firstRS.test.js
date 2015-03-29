var test = require('tape-catch');

test('[TEST] firstRS.js', function(t){
  var Readable = require('stream').Readable;

  var rs = require('../firstRS.js')();
  t.comment('--> Readable stream created');

  var wsMock = '';

  // rs.push('oh ');
  // rs.push('hey');
  // rs.push(null);

  rs.on('data', function(chunk){
    wsMock += chunk;
  });

  rs.on('end', function(){
    t.equals(wsMock, 'oh hey', '* It should create a Readable stream that can pass along the string \'oh hey\'');
  });

  t.pass('Auto passing test');

  t.end();
});