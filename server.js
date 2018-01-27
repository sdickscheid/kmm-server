const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/home', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/portfolio', function(req, res){
  res.render('portfolio');
});

app.get('/services', function(req, res){
  res.render('services');
});

app.get('/faq', function(req, res){
  res.render('faq');
});

app.get('/contact', function(req, res){
  res.render('contact');
});




var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
