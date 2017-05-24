var bookModel = require('./book.model');

function dbMethods() {

    this.selectBook = function(id, res) {
        
        return bookModel.where('id', id)
                        .fetch()
                        .then()
                        .catch(err => {
                            res.status(500).json({error: true, number: err.errno, origin: {module: 'dbMethods', function: 'selectBook'}, data: {message: err.message}});
                        });
    }

    this.insertBook = function (req, res) {

        return bookModel.forge({
                            author_id: req.author_id,
                            title: req.title,
                            year: req.year || null,
                            isbn: req.isbn || null
                        })
                        .save()
                        .then() // <= Get book id created and set a new relation in "books_genres" table between book_id and genre_id (req.genre_id)
                        .catch(err => {
                            res.status(500).json({error: true, number: err.errno, origin: {module: 'dbMethods', function: 'insertBook'}, data: {message: err.message}});
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