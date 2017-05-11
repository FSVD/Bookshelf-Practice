var express = require('express');
var app = express();

// Including routers:
var index = require('./index');
var bookshelf = require('./bookshelf');

// Configuring routers passing the app as parameter:
index.configure(app);
bookshelf.configure(app);

module.exports = app;