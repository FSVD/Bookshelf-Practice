var authorModel = require('../models/author');
var bookModel = require('../models/book');
var genreModel = require('../models/genre');


function dbMethods() {

    this.selectAllGenres = function (req, res) {

        return genreModel.fetchAll()
                         .then()
                         .catch((err) => {
                               res.status(500).json({error: true, origin: {module: 'dbMethods', function: 'selectAllGenres'}, data: {message: err.message}});
                         });
    }

    this.selectGenreBooks = function (id, res) {

        return genreModel.where('id', id)
                         .fetch({
                               withRelated: ['books']
                         })
                         .then()
                         .catch((err) => {
                               res.status(500).json({error: true, origin: {module: 'dbMethods', function: 'selectGenreBooks'}, data: {message: err.message}});
                         });
    }
}

module.exports = new dbMethods();