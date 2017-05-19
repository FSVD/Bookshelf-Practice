var genreService = require('../services/genre');

function genreController() {

    this.selectAllGenres = function (req, res) {
        return new Promise((resolve, reject) => {
            resolve(genreService.selectAllGenres(req, res));
        }).then(result => {
            res.json(result); // Sends an objects collection/array
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'genreController', function: 'selectAllGenres'}, data: {message: err.message}});
        })
    }

    this.selectGenreBooks = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(genreService.selectGenreBooks(id, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'genreController', function: 'selectGenreBooks'}, data: {message: err.message}});
        })
    }

}

module.exports = new genreController();