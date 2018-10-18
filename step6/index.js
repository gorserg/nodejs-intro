const http = require('http');

const static = require('node-static');
const file = new static.Server('.');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  file.serve(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});