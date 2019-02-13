var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use('/', express.static(__dirname + '/public'));

app.get('/api/ping', function (req, res) {
    res.json({"ping": new Date().toISOString()});
});

app.get('/api/tracks', (req, res) => {
    res.send("Got GET request at /api/tracks");
});
app.post('/api/tracks', (req, res) => {
    res.send("Got a POST request at /api/tracks");
});
app.put('/api/tracks', (req, res) => {
    res.send("Got a PUT request at /api/tracks");
});
app.delete('/api/tracks', (req, res) => {
    res.send("Got a DELETE request at /api/tracks");
});

app.listen(app.get('port'), function () {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
