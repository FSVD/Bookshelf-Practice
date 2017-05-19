var genreRepository = require('../repositories/genre');

function genreService() {

    this.selectAllGenres = function (req, res) {
        return new Promise((resolve, reject) => {
            resolve(genreRepository.selectAllGenres(req, res));
        }).then(result => {
            return result
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'genreService', function: 'selectAllGenres'}, data: {message: err.message}});
        })
    }

    this.selectGenreBooks = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(genreRepository.selectGenreBooks(id, res));
        }).then(result => {
            return result
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'genreService', function: 'selectGenreBooks'}, data: {message: err.message}});
        })
    }

}

module.exports = new genreService();