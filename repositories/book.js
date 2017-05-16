var authorModel = require('../models/author');
var bookModel = require('../models/book');
var genreModel = require('../models/genre');


function dbMethods() {

    this.selectBook = function(id, res) {
        
        return bookModel.where('id', id)
                        .fetch()
                        .then((result) => {
                            return result
                        })
                        .catch((err) => {
                            return err
                        });
    }

    this.insertBook = function (req, res) {

        if (req.title) {
            return bookModel.forge({
                                author_id: req.author_id,
                                title: req.title,
                                year: req.year || null,
                                isbn: req.isbn || null
                            })
                            .save()
                            .then((result) => {
                                // Get book id created and set a new relation in "books_genres" table between book_id and genre_id (req.genre_id)
                                return result
                            })
                            .catch((err) => {
                                    return err
                            });
        } else {
            res.status(400).send('Missing Parameters')
        }
    }

    this.selectBookGenres = function (id, res) {

        return bookModel.where('id', id)
                        .fetch({
                            withRelated: ['genres']
                        })
                        .then((result) => {
                            return result
                        })
                        .catch((err) => {
                            return err
                        });
    }
}

module.exports = new dbMethods();