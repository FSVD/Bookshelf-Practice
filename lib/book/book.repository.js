"use strict";

var bookModel = require('./book.model');

function dbMethods() {

	var self = this;

    self.selectBook = function(id, res) {
        
        return bookModel.where('id', id)
                        .fetch()
                        .then(result => {
                            if (!result) {
									throw new Error('Book does not exist in our database'); // if there is no result throws the error to catch statement
								} else {
									return result // else returns result to service
								}
                        })
                        .catch(err => {
                            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'selectBook'}});
                        });
    }

    self.insertBook = function (req, res) {

        // verify if author exists

        return bookModel.forge({
                            author_id: req.body.author_id,
                            title: req.body.title,
                            year: req.body.year || null,
                            isbn: req.body.isbn || null
                        })
                        .save()
                        .then() // <= Get book id created and set a new relation in "books_genres" table between book_id and genre_id (req.genre_id)
                        .catch(err => {
                            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'insertBook'}});
                        });
    }

    self.updateBook = function (req, res) {

		var id = req.body.id;

		return self.selectBook(id, res).then(result => {
												if (!result) {
														throw new Error('Book does not exist in our database'); // if there is no result throws the error to catch statement
												} else {
												return result.save({
																author_id: req.body.author_id || result.author_id,
																title: req.body.title || result.title,
																year: req.body.year || result.year,
                                                                isbn: req.body.isbn || result.isbn
															},
															{
																method: 'update',
																patch: true
															})
															.then()
															.catch(err => {
																	throw new Error('Error updating book');
															});
												}
										 })
										 .catch(err => {
										 		return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'updateBook'}});
										 });
											   
    }

    self.deleteBook = function (id, res) {

        return self.selectBook(id, res).then(result => {
											   if (!result) {
											   		throw new Error('Book does not exist in our database'); // if there is no result throws the error to catch statement
											   } else {
													return bookModel.forge({
																			id: id
																	})
																	.destroy()
																	.catch((err) => {
																			return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'deleteBook'}});
																	});
											   }
										 })
										 .catch(err => {
											return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'deleteBook'}});
										 });
    }

    self.selectBookGenres = function (id, res) {

        return bookModel.where('id', id)
                        .fetch({
                            withRelated: ['genres']
                        })
                        .then(result => {
                            if (!result) {
									throw new Error('Book does not exist in our database'); // if there is no result throws the error to catch statement
								} else {
									return result // else returns result to service
								}
                        })
                        .catch(err => {
                            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'selectBookGenres'}, data: {message: err.message}});
                        });
    }
}

module.exports = new dbMethods();