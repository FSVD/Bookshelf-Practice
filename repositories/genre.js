var authorModel = require('../models/author');
var bookModel = require('../models/book');
var genreModel = require('../models/genre');


function dbMethods() {

    this.selectAllGenres = function (req, res) {

        return genreModel.fetchAll()
                         .then((result) => {
                               return result
                         })
                         .catch((err) => {
                               return err
                         });
    }

    this.selectGenreBooks = function (id, res) {

        return genreModel.where('id', id)
                         .fetch({
                               withRelated: ['books']
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