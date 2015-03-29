module.exports = function(){
  var Readable = require('stream').Readable;
  var rs = new Readable;

  rs.push('oh ');
  rs.push('hey');
  rs.push(null);

  rs.pipe(process.stdout);
  return rs;
};