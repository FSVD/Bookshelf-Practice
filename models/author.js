var db = require('../config/db');
var Books = require('./book');

var Authors = db.Model.extend({
  tableName: 'authors',

  books: function() {
    return this.hasMany(Books);
  }

});

module.exports = Authors;