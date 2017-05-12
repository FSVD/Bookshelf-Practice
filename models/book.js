var db = require('../config/db');

var Books = db.Model.extend({
  tableName: 'books'
});

module.exports = Books;