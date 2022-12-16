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
    db.collection('playTime').find({team: "강원FC"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽강원FC 경기 일정⚽"})
    })
})

app.get('/Support', function(req, res) {
    res.sendFile(__dirname + '/views/Support.html')
})


// 각 구단별 경기일정
app.get('/sche-gangwon', function(req, res) {
    db.collection('playTime').find({team: "강원FC"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽강원FC 경기 일정⚽"})
    })
    
})

app.get('/sche-wonju', function(req, res) {
    db.collection('playTime').find({team: "원주 DB 프로미"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "🏀원주 DB 프로미 경기 일정🏀"})
    })
    
})

app.get('/sche-hwacheon', function(req, res) {
    db.collection('playTime').find({team: "화천KSPO"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽화천KSPO 경기 일정⚽"})
    })
    
})

app.get('/sche-Gangneung', function(req, res) {
    db.collection('playTime').find({team: "강릉시민축구단"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽강릉시민축구단 경기 일정⚽"})
    })
    
})

app.get('/sche-ChunCheon', function(req, res) {
    db.collection('playTime').find({team: "춘천시민축구단"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽춘천시민축구단 경기 일정⚽"})
    })
    
})

app.get('/sche-Pyeongchang', function(req, res) {
    db.collection('playTime').find({team: "평창유나이티드축구클럽"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽평창 유나이티드FC 경기 일정⚽"})
    })
    
})

app.get('/sche-Samcheok', function(req, res) {
    db.collection('playTime').find({team: "삼척시청"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "🤾‍♀️삼척시청 여자 핸드볼단 경기 일정🤾‍♀️"})
    })
    
})





// 각 구단 응원하기 페이지
app.get('/gwFC', function(req, res) {
    res.sendFile(__dirname + '/views/comment/gwFC.html')
})

app.get('/wjDB', function(req, res) {
    res.sendFile(__dirname + '/views/comment/wjDB.html')
})

app.get('/hcKSPO', function(req, res) {
    res.sendFile(__dirname + '/views/comment/hcKSPO.html')
})

app.get('/gnFC', function(req, res) {
    res.sendFile(__dirname + '/views/comment/gnFC.html')
})

app.get('/ccFC', function(req, res) {
    res.sendFile(__dirname + '/views/comment/ccFC.html')
})

app.get('/pcuFC', function(req, res) {
    res.sendFile(__dirname + '/views/comment/pcuFC.html')
})

app.get('/scHB', function(req, res) {
    res.sendFile(__dirname + '/views/comment/scHB.html')
})
