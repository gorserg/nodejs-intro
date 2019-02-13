const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if (req.url === '/') {
        let stream = fs.createReadStream(path.join(__dirname, 'index.html'));
        stream.pipe(res);
    }
    else if (req.url === '/ping') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ping: new Date().toISOString()}));
    }
    else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});