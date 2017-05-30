var bookValidator = require('./book.validator');
var bookController = require('./book.controller');

function http() {
    this.configure = function(app) {

        app.get('/book/:id/', function(req, res){
            bookValidator.validateSelectBookParams(req.params.id, res) // Validates request
            .then(result => {
                bookController.selectBook(req.params.id, res);
            }).catch(err => {
                //console.log("Error catched in router\n "+JSON.stringify(err))
                res.status(500).render('error', { errorTitle: 'Selecting book error', errorMessage: err.message });
            })
        })

        app.post('/book/', function(req, res){
            bookValidator.validateInsertBookParams(req, res)
            .then(result => {
                bookController.insertBook(req, res);
            }).catch(err => {
                res.status(500).render('error', { errorTitle: 'Inserting book error', errorMessage: err.message });
            })
        })

        app.delete('/book/:id/', function(req, res){
            bookController.deleteBook(req.params.id, res);
        })

        app.get('/book/:id/genres/', function(req, res){
            bookController.selectBookGenres(req.params.id, res);
        })
    }
}

module.exports = new http();