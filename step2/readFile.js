var fs = require('fs');

fs.readFile('myfile.txt', function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});