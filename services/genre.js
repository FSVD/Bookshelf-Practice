var genreRepository = require('../repositories/genre');

function genreService() {

    this.selectAllGenres = function (req, res) {
        genreRepository.selectAllGenres(req, res);
    }

    this.selectGenreBooks = function (id, res) {
        genreRepository.selectGenreBooks(id, res);
    }

}

module.exports = new genreService();