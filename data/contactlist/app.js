// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// port number
const port = 3000;

// adding midelware = cors
app.use(cors());

// body parser
app.use(bodyparser.json());

// statuic files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api', route);


// testing SErver
app.get('/', (req, res)=> {
    res.send('foobar');
});

app.listen(port,()=> {
    console.log('Server started at port: '+port);
});