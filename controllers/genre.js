var genreService = require('../services/genre');

function genreController() {

    this.selectAllGenres = function (req, res) {
        genreService.selectAllGenres(req, res);
    }

    this.selectGenreBooks = function (id, res) {
        genreService.selectGenreBooks(id, res);
    }

}

module.exports = new genreController();