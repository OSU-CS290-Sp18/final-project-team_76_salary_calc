var express = require('express');
var exphb = require('express-handlebars');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

app.engine('handlebars', exphb());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/test', function(req, res, next) {
    res.status(200).render('pay',{
      name:'Mark Twain',
      
    })

app.use('*', function(req, res, next) {
    res.status(404).render('404Page');
});

app.listen(PORT, function() {
    console.log('oo  The server\'s listening on port ', PORT);
});
