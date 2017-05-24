var db = require('../config/db');
require('./book');
require('./genre');

var booksGenresModel = db.Model.extend({
	tableName: 'books_genres',

	books: function () {
		return this.hasMany('bookModel');
	},

	genres: function () {
		return this.hasMany('genreModel');
	}

});

module.exports = db.model('booksGenresModel', booksGenresModel);