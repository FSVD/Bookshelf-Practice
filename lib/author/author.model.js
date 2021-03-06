"use strict";

var db = require('../../config/db');
require('../book/book.model'); // To avoid circular dependency we have to require model without assigning it to a variable

var authorModel = db.Model.extend({
	tableName: 'authors',

	books: function () {
		return this.hasMany('bookModel');
	}

}, {
		dependents: ['books']
	});

module.exports = db.model('authorModel', authorModel); // To avoid circular dependency we have to export using this bookshelf sintax