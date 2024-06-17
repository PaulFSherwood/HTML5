import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

app.get("/about", (req, res) => {
    res.send(`
        <head>
            <title>About Me</title>
        </head>
        <body>
            <h1>About Me</h1>
            <p>My name is [Your Name].</p>
            <p>I live in [Your City].</p>
            <p>I enjoy [Your Hobby].</p>
        </body>
    `);
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1><h2>paul</h2>");
});

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});
///////////////////////////////////////////////////
///////////////////////////////////////////////////
app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
    res.sendStatus(200);
});

// var http = require('http');
// import http from "http";

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);
