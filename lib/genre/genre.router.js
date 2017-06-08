"use strict";

var genreValidator = require('./genre.validator');
var genreController = require('./genre.controller');

function http() {

    var self = this;
    
    self.configure = function(app) {

        app.get('/genres/', function(req, res){
            genreController.selectAllGenres(req, res);
        })

        app.get('/genre/:id/books/', function(req, res){
            genreValidator.validateSelectGenreBooksParams(req.params.id, res)
            .then(result => {
                genreController.selectGenreBooks(req.params.id, res);
            }).catch(err => {
                res.status(500).render('error', { errorTitle: "Selecting genre' books error", errorMessage: err.message });
            })
        })
    }
}

module.exports = new http();