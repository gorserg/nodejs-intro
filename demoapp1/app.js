var express = require('express');
var app = express();
var mongoose = require('mongoose');

const tracks = require('./data/tracks.json');
const port = process.env.PORT || 8080;


app.use('/', express.static('public'));

// Connect mLab MongoDB
mongoose.connect('mongodb://admin:qwerty123@ds261040.mlab.com:61040/danit');

const Track = mongoose.model('Track', { id: Number, name: String });

//const track = new Track({ id : 1,  name: 'Track #1' });
//track.save().then(() => console.log('saved'));

// Create our Express router
var router = express.Router();

var trackRoute = router.route('/track');

trackRoute.get(function(req, res) {
    Track.find(function(err, tracks) {
        if (err)
            res.send(err);

        res.json(tracks);
    });
});


// Register all our routes with /api
app.use('/api', router);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/api/ping', function (req, res) {
    res.json({ "ping": new Date().toISOString() });
});

app.get('/api/tracks', function (req, res) {
    res.json(tracks);
});

app.get('/api/tracks/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const track = tracks.find(i => i.id === id);
    res.json(track);
});

app.listen(port, function () {
    console.log(`Express server running at http://localhost:${port}/`);
});
