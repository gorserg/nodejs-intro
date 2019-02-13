const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var tracks = [
    {id: 1, name: "Track1", artist: "Artist 1", album: "Album"}
]

app.set('port', (process.env.PORT || 8080));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'));


app.get('/api/ping', function (req, res) {
    res.json({"ping": new Date().toISOString()});
});

app.get('/api/tracks', (req, res) => {
    res.json(tracks);
});
app.post('/api/tracks', (req, res) => {
    tracks.push(req.body);
    res.json(req.body);
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
