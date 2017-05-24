var db = require('../../config/db');
require('../author/author.model');
require('../genre/genre.model');

var bookModel = db.Model.extend({
	tableName: 'books',

	author: function () {
		return this.belongsTo('authorModel');
	},

	genres: function () {
		return this.belongsToMany('genreModel');
	}

});

module.exports = db.model('bookModel', bookModel);