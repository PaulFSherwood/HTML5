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
var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(req, res) {
    eventEmitter.emit('someone requested', 'TEST'); // Event Trigger
    res.end('Server Works!!!');
});

eventEmitter.on('someone requested', function(data) {
    console.log('A request has been done on the server!', data);
}); // Event Listener

server.listen(3000, 'localhost', function() {
    console.log('Server started on port : 3000');
});


