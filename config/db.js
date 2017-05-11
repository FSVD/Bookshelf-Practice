var config      = require('../knexfile.js');  
var env         = 'development';  
var knex        = require('knex')(config[env]);

knex.migrate.latest([config]); 

module.exports = require('bookshelf')(knex); // Export module bookshelf for access to db connection