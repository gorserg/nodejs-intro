var fs = require('fs');

fs.readFile('myfile.txt', function(err, data) {
  console.log(err, data);
});