var db = require('../config/db');
require('./author'); // To avoid circular dependency we have to require model without assigning it to a variable
require('./genre');

var bookModel = db.Model.extend({
  tableName: 'books',

  author: function() {
    return this.belongsTo('authorModel');
  },

  genres: function() {
    return this.belongsToMany('genreModel');
  }
  
});

module.exports = db.model('bookModel', bookModel); // To avoid circular dependency we have to export using this bookshelf sintax