var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use('/', express.static(__dirname + '/public'));

app.get('/api/ping', function (req, res) {
    res.json({ "ping": new Date().toISOString() });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
