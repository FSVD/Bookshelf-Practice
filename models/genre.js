var db = require('../config/db');
require('./book'); // To avoid circular dependency we have to require model without assigning it to a variable

var genreModel = db.Model.extend({
  tableName: 'genres',

  books: function() {
    return this.belongsToMany('bookModel');
  }

});

module.exports = db.model('genreModel', genreModel); // To avoid circular dependency we have to export using this bookshelf sintax