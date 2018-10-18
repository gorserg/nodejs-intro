var fs = require('fs');
var zlib = require('zlib');
 
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.zip'));

fs.createReadStream('input.zip')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('output.txt'));