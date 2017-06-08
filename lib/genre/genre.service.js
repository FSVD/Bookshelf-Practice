"use strict";

var genreRepository = require('./genre.repository');

function genreService() {

    var self = this;

    self.selectAllGenres = function (req, res) {
        return genreRepository.selectAllGenres(req, res)
        .then(result => {
            return result
        }).catch(err => {
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'genreService', function: 'selectAllGenres'}});
        })
    }

    self.selectGenreBooks = function (id, res) {
        return genreRepository.selectGenreBooks(id, res)
        .then(result => {
            var resultObject = JSON.parse(JSON.stringify(result));
            if (resultObject.books[0] != null) {
                return result
            } else {
                return 'self genre has no books!';
            }
        }).catch(err => {
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'genreService', function: 'selectGenreBooks'}});
        })
    }

}

module.exports = new genreService();