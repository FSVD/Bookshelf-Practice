var genreModel = require('./genre.model');

function dbMethods() {

    this.selectAllGenres = function (req, res) {

        return genreModel.fetchAll()
                         .then()
                         .catch(err => {
                               res.status(500).json({error: true, number: err.errno, origin: {module: 'dbMethods', function: 'selectAllGenres'}, data: {message: err.message}});
                         });
    }

    this.selectGenreBooks = function (id, res) {

        return genreModel.where('id', id)
                         .fetch({
                               withRelated: ['books']
                         })
                         .then()
                         .catch(err => {
                               res.status(500).json({error: true, number: err.errno, origin: {module: 'dbMethods', function: 'selectGenreBooks'}, data: {message: err.message}});
                         });
    }
}

module.exports = new dbMethods();