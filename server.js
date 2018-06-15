var path = require('path');
var express = require('express');
var exphb = require('express-handlebars');
var app = express();
var PORT = process.env.PORT || 3000;

app.engine( "handlebars", exphb({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

var startData = require( "./payData" );

console.log( startData );


app.get('/payPage', function(req, res, next) {
   res.status(200).render('payPage', startData );
});

/*app.get('/payPage', function( req, res, next) {
   res.status(200).render('payPage');
});*/

app.use('/newSalary', function(req, res, next) {
   res.status(200).render('newSalary');
});

app.use('/homePage', function(req, res, next) {
   res.status(200).render('homePage');
});

app.use( "/*", function(req, res, next) {
   res.status(404).render('404');
});

app.listen(PORT, function() {
   console.log('The server\'s listening on port ', PORT);
});
