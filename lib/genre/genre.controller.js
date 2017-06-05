"use strict";

var genreService = require('./genre.service');

function genreController() {

    this.selectAllGenres = function (req, res) {
        return genreService.selectAllGenres(req, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Genres selected', resultMessage: JSON.stringify(result) }); // Sends an objects collection/array
            //res.status(200).render('result_commons', { resultTitle: 'Genres selected', resultMessage: JSON.stringify(result) }); // Multiple views folder rendering test
        }).catch(err => {
            res.status(500).render('error', { errorTitle: 'Genres not selected', errorMessage: err.message });
        })
    }

    this.selectGenreBooks = function (id, res) {
        return genreService.selectGenreBooks(id, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: "Genre' books selected", resultMessage: JSON.stringify(result) });
        }).catch(err => {
            res.status(500).render('error', { errorTitle: 'Books not selected', errorMessage: err.message });
        }) 
    }

}

module.exports = new genreController();