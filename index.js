const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('listening on 8080')
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/main.html')
})

app.get('/Intro', function(req, res) {
    res.sendFile(__dirname + '/Intro.html')
})

app.get('/Pro', function(req, res) {
    res.sendFile(__dirname + '/Pro.html')
})

app.get('/Semi', function(req, res) {
    res.sendFile(__dirname + '/Semi.html')
})

app.get('/Schedule', function(req, res) {
    res.sendFile(__dirname + '/Schedule.html')
})

app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/test.html')
})