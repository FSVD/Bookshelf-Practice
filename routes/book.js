var bookController = require('../controllers/book');

function http() {
    this.configure = function(app) {

        app.get('/book/:id/', function(req, res){
            bookController.selectBook(req.params.id, res);
        })

        app.post('/book/', function(req, res){
            bookController.insertBook(req.body, res);
        })

        app.get('/book/:id/genres/', function(req, res){
            bookController.selectBookGenres(req.params.id, res);
        })
    }
}

module.exports = new http();