var express = require('express');
var exphb = require('express-handlebars').create({defaultLayout: 'main'});
var path = require('path');
var app = express();
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

const db = require('./nodejs/datastorage.js');

db.connect()
    .then(
        () => {
            db.initialize();
            console.log("Connected to MongoDB");
        })
    .catch(
        (reason) => {
            console.log("Please check if mongodb installed or started.");
        }
    );


app.engine('handlebars', exphb.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res, next) {
	db.getAllEvents()
		.then((data) => {
			console.log(data)
		    res.status(200).render('index', {title:"Pay Calculator", data: data});
		});
    })

app.get('/home', function(req, res, next) {
    res.status(200).render('home', {title:"Pay Calculator"});
    })

app.get('/newsalary', function(req, res, next) {
    res.status(200).render('newsalary', {title:"Pay Calculator"});
    })

app.post('/newsalary', function(req, res, next) {
    db.addEvent(req.body.name, req.body.position, req.body.yearincome)
        .then((data) => {
            console.log(data)
            res.json({status:200, data:data});
        });
    })


app.use('*', function(req, res, next) {
    res.status(404).render('404', {title:"Pay Calculator"});
});

app.listen(PORT, function() {
    console.log('oo  The server\'s listening on port ', PORT);
});
