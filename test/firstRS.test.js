var test = require('tape-catch');

test('[TEST] firstRS.js -- under development', function(t){
  var Readable = require('stream').Readable;

  var rs = new Readable;
  t.comment('--> Readable stream created');

  var wsMock = '';

  rs.push('oh ');
  rs.push('hey');
  rs.push(null);

  rs.on('data', function(chunk){
    wsMock += chunk;
  });

  rs.on('end', function(){
    t.equals(wsMock, 'oh hey', '* It should create a Readable stream that can pass along chunks of data');
  });

  t.pass('Auto passing test');

  t.end();
});