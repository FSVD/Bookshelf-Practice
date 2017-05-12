var express = require('express');
var app = express();

// Including routers:
var index = require('./index');
var author = require('./author');
var book = require('./book');

// Configuring routers passing the app as parameter:
index.configure(app);
author.configure(app);
book.configure(app);

module.exports = app;