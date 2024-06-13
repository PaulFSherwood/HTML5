// import express from "express";
// const app = express();
// const port = 3000;

// app.listen(port, () => {
//     console.log(`Server running on port ${port}.`);
// });


// var http = require('http');
import http from "http";

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
