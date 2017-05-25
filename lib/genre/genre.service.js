var genreRepository = require('./genre.repository');

function genreService() {

    this.selectAllGenres = function (req, res) {
        return genreRepository.selectAllGenres(req, res)
        .then(result => {
            return result
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'genreService', function: 'selectAllGenres'}, data: {message: err.message}});
        })
    }

    this.selectGenreBooks = function (id, res) {
        return genreRepository.selectGenreBooks(id, res)
        .then(result => {
            return result
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'genreService', function: 'selectGenreBooks'}, data: {message: err.message}});
        })
    }

}

module.exports = new genreService();