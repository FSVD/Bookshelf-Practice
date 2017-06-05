"use strict";

var config      = require('./knexfile.js');  
var env         = 'development';  
var knex        = require('knex')(config[env]);

knex.migrate.latest([config]); 

var bookshelf = require('bookshelf')(knex);
var cascadeDelete = require('bookshelf-cascade-delete');

bookshelf.plugin(cascadeDelete); // Provides cascade delete
bookshelf.plugin('registry'); // Avoid circular dependency among models

module.exports = bookshelf; // Export module bookshelf for access to db connection