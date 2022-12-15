/////////
// nodejs, nodemon, express, ejs, body-parser, mongodb : 설치해야하는것들
/////////
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}))
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/"));

MongoClient.connect("mongodb+srv://Yerim:rkskek204!@cluster0.et8woqo.mongodb.net/?retryWrites=true&w=majority", function(err, client){
    if (err) return console.log(err);
    db = client.db('Gangwon_Sports');

    console.log('DB connected');

    app.listen(8080, function() {
        console.log('listening on 8080');
    })
})


app.get('/game', function(req, res) {
    db.collection('comment').find().toArray(function(err, result){
      console.log(result);
      res.render('game.ejs', {gameinfo : result})
    })
})

app.get('/wonjuDB', function(req, res) {
    res.render('wonjuDB.ejs');
})


////////


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/main.html')
})

app.get('/Intro', function(req, res) {
    res.sendFile(__dirname + '/views/Intro.html')
})

app.get('/Pro', function(req, res) {
    res.sendFile(__dirname + '/views/Pro.html')
})

app.get('/Semi', function(req, res) {
    res.sendFile(__dirname + '/views/Semi.html')
})

app.get('/Schedule', function(req, res) {
    res.sendFile(__dirname + '/views/Schedule.html')
})

app.get('/Support', function(req, res) {
    res.sendFile(__dirname + '/views/Support.html')
})

app.get('/gwFC', function(req, res) {
    res.sendFile(__dirname + '/views/gwFC.html')
})

app.get('/wjDB', function(req, res) {
    res.sendFile(__dirname + '/views/wjDB.html')
})

app.get('/hcKSPO', function(req, res) {
    res.sendFile(__dirname + '/views/hcKSPO.html')
})

app.get('/gnFC', function(req, res) {
    res.sendFile(__dirname + '/views/gnFC.html')
})

app.get('/ccFC', function(req, res) {
    res.sendFile(__dirname + '/views/ccFC.html')
})

app.get('/pcuFC', function(req, res) {
    res.sendFile(__dirname + '/views/pcuFC.html')
})

app.get('/scHB', function(req, res) {
    res.sendFile(__dirname + '/views/scHB.html')
})
