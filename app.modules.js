"use strict";

var express = require('express');
var app = express();

// Including modules:
var index = require('./lib/index');
var author = require('./lib/author');
var book = require('./lib/book');
var genre = require('./lib/genre');

app.use(index);
app.use(author);
app.use(book);
app.use(genre)

module.exports = app;