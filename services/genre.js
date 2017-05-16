var genreRepository = require('../repositories/genre');

function genreService() {

    this.selectAllGenres = function (req, res) {
        return new Promise((resolve, reject) => {
            resolve(genreRepository.selectAllGenres(req, res));
        }).then(result => {
            res.json(result); // Sends an objects collection/array
        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}});
        })
    }

    this.selectGenreBooks = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(genreRepository.selectGenreBooks(id, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}});
        })
    }

}

module.exports = new genreService();