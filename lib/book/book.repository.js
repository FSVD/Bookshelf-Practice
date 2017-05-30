var bookModel = require('./book.model');

function dbMethods() {

    this.selectBook = function(id, res) {
        
        return bookModel.where('id', id)
                        .fetch()
                        .then(result => {
                            if (!result) {
									throw new Error("Book does not exist in our database"); // if there is no result throws the error to catch statement
								} else {
									return result // else returns result to service
								}
                        })
                        .catch(err => {
                            return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'dbMethods', function: 'selectBook'}});
                        });
    }

    this.insertBook = function (req, res) {

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

    this.deleteBook = function (req, res) {

        return bookModel.forge({
                                id: req
                        })
                        .destroy()  // <= Delete relation in "books_genres" table between book_id and genre_id (req.genre_id)
                        .catch(err => {
                            res.status(500).json({error: true, number: err.errno, origin: {module: 'dbMethods', function: 'deleteBook'}, data: {message: err.message}});
                        });
    }

    this.selectBookGenres = function (id, res) {

        return bookModel.where('id', id)
                        .fetch({
                            withRelated: ['genres']
                        })
                        .then()
                        .catch(err => {
                            res.status(500).json({error: true, number: err.errno, origin: {module: 'dbMethods', function: 'selectBookGenres'}, data: {message: err.message}});
                        });
    }
}

module.exports = new dbMethods();