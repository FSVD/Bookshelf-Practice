var db = require('../../config/db');
require('../book/book.model');

var genreModel = db.Model.extend({
	tableName: 'genres',

	books: function () {
		return this.belongsToMany('bookModel');
	}

});

module.exports = db.model('genreModel', genreModel);