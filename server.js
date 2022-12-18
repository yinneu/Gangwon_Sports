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


app.get('/', function(req, res) {
    res.render('Main.ejs')
})


// 소개 페이지
app.get('/Intro', function(req, res) {
    res.render('Intro.ejs')
})


// 프로 페이지
app.get('/Pro', function(req, res) {
    res.render('Pro.ejs')
})


// 세미프로 페이지
app.get('/Semi', function(req, res) {
    res.render('Semi.ejs')
})


// 경기일정 페이지
app.get('/Schedule', function(req, res) {
    db.collection('playTime').find({team: "강원FC"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽강원FC 경기 일정⚽", sche_link: 'https://gangwon-fc.com/match/schedule' })
    })
})



// 각 구단별 경기일정
app.get('/sche-gangwon', function(req, res) {
    db.collection('playTime').find({team: "강원FC"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽강원FC 경기 일정⚽", sche_link: 'https://gangwon-fc.com/match/schedule' })
    })
})

app.get('/sche-wonju', function(req, res) {
    db.collection('playTime').find({team: "원주 DB 프로미"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "🏀원주 DB 프로미 경기 일정🏀", sche_link: 'https://promy.kbl.or.kr/game/schedule-list' })
    })
    
})

app.get('/sche-hwacheon', function(req, res) {
    db.collection('playTime').find({team: "화천KSPO"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽화천KSPO 경기 일정⚽", sche_link: 'https://www.kwff.or.kr/match' })
    })
    
})

app.get('/sche-Gangneung', function(req, res) {
    db.collection('playTime').find({team: "강릉시민축구단"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽강릉시민축구단 경기 일정⚽", sche_link: 'http://www.gncityfc.com/sub/sub3/sub1.html' })
    })
    
})

app.get('/sche-ChunCheon', function(req, res) {
    db.collection('playTime').find({team: "춘천시민축구단"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽춘천시민축구단 경기 일정⚽", sche_link: 'http://cccitizenfc.co.kr/front/portal/sub04_01_01' })
    })
    
})

app.get('/sche-Pyeongchang', function(req, res) {
    db.collection('playTime').find({team: "평창유나이티드축구클럽"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "⚽평창 유나이티드FC 경기 일정⚽", sche_link: 'http://www.pcutdfc.com/contents.do?cid=93c5ea5facd340b8a1662171111da225' })
    })
    
})

app.get('/sche-Samcheok', function(req, res) {
    db.collection('playTime').find({team: "삼척시청"}).toArray(function(err, result){
        console.log(result);
        res.render('Schedule.ejs', {data : result, title : "🤾‍♀️삼척시청 여자 핸드볼단 경기 일정🤾‍♀️", sche_link: 'http://league.pndcom.com/game/schedule_list.php' })
    })
    
})


//댓글 작성하기
app.post('/add', function(req, res){
    db.collection('comment').insertOne( { team: req.body.team, comment : req.body.comment, author : req.body.author } , function(err, result){
        if (err) return console.log(err)
        console.log('save complete')
        res.redirect(req.body.link)
    });  
});


// 각 구단 응원하기 페이지
app.get('/gwFC', function(req, res) {
    db.collection('comment').find( { team : "강원FC" }).toArray(function(err, result){
        console.log(result);
        res.render('gwFC.ejs', {commentInfo : result})
    })
})

app.get('/wjDB', function(req, res) {
    db.collection('comment').find( { team : "원주 DB 프로미" }).toArray(function(err, result){
        console.log(result);
        res.render('wjDB.ejs', {commentInfo : result})
    })
})

app.get('/hcKSPO', function(req, res) {
    db.collection('comment').find( { team : "화천 KSPO" }).toArray(function(err, result){
        console.log(result);
        res.render('hcKSPO.ejs', {commentInfo : result})
    })
})

app.get('/gnFC', function(req, res) {
    db.collection('comment').find( { team : "강릉시민축구단" }).toArray(function(err, result){
        console.log(result);
        res.render('gnFC.ejs', {commentInfo : result})
    })
})

app.get('/ccFC', function(req, res) {
    db.collection('comment').find( { team : "춘천시민축구단" }).toArray(function(err, result){
        console.log(result);
        res.render('ccFC.ejs', {commentInfo : result})
    })
})

app.get('/pcuFC', function(req, res) {;
    db.collection('comment').find( { team : "평창 유나이티드FC" }).toArray(function(err, result){
        console.log(result);
        res.render('pcuFC.ejs', {commentInfo : result})
    })
})

app.get('/scHB', function(req, res) {
    db.collection('comment').find( { team : "삼척시청" }).toArray(function(err, result){
        console.log(result);
        res.render('scHB.ejs', {commentInfo : result})
    })
})
