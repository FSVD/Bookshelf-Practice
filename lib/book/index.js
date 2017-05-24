var express = require('express');
var path = require('path');
var app = express();

// router setup
var book = require('./book.router');
book.configure(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

module.exports = app;