// var firstName = 'EduBacon';

// console.log(firstName);
// firstName = 10;
// console.log(firstName);
// var age1 = 30;
// var age2 = '30';
// var result = age1 == age2;
// console.log(result);
// var result = age1 === age2;
// // console.log(result);
// function sayHello(name) {
//     return ('Hello ' + name + ' !!!');
// }
// console.log(sayHello('Paul'));

// // anonymous function
// var sayHello = function(name) {
//     return ('Hello ' + name + ' !!!');
// }
// console.log(sayHello('Paul'));

// // Objects
// var student = {
//     name: 'Fname',
//     email: 'Fname@gmail.com'
// }
// console.log(student.name);

// File System
// var fs = require('fs');
// fs.writeFile('./hello.txt', 'How are you?', function(err) {
//     if (!err) {
//         fs.readFile('./hello.txt', function(err, data) {
//             if (!err) {
//                 console.log(data.toString());
//             }
//         });
//     }
// })

// Events

// CREATE A SERVER
// var http = require('http');
// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// var server = http.createServer(function(req, res) {
//     eventEmitter.emit('someone requested', 'TEST'); // Event Trigger
//     res.end('Server Works!!!');
// });

// eventEmitter.on('someone requested', function(data) {
//     console.log('A request has been done on the server!', data);
// }); // Event Listener

// server.listen(3000, 'localhost', function() {
//     console.log('Server started on port : 3000');
// });

var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var server = http.createServer(app);

// address the get request
app.get('/', function(req, res) {
    // Show working and test html
    res.send('<h1>Express Works!</h1>');
});

// Looks like this adds another directory tree
app.get('/tasks', function(req, res) {
    // res.send('<h1>Tasks work</h1>');
    fs.readFile('./db.json', function(err, data) {
        // Convert to json toString wont have tasks
        var tasks = JSON.parse(data.toString()).tasks;
        // res.send(data.toString());
        res.send(tasks);
    })
});
// Start server on port 3000
// app.listen(3000, function() {
server.listen(3000, function() {
    console.log('Server listing to port 3000');
});
