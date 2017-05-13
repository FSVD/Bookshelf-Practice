var genreController = require('../controllers/genre');

function http() {
    this.configure = function(app) {

        app.get('/genre/', function(req, res){
            genreController.selectAllGenres(req, res);
        })

        app.get('/genre/:id/books/', function(req, res){
            genreController.selectGenreBooks(req.params.id, res);
        })
    }
}

module.exports = new http();