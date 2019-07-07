"use strict";

var express = require('express');
var path = require('path');
var multiViews = require('multi-views'); // module adds support for rendering views from multiple directories
var app = express();

// router setup
var genre = require('./genre.router');
genre.configure(app);

// view engine setup for multiple views
var viewDirs = [];
app.set('views',viewDirs);
app.set('view engine', 'hbs');
viewDirs.push(path.resolve(__dirname,'views'));
viewDirs.push(path.resolve(__dirname,'../_commons/views'));
multiViews.setupMultiViews(app);

module.exports = app;