var authorValidator = require('./author.validator');
var authorController = require('./author.controller');

function http() {
    this.configure = function(app) {

        app.get('/author/:id', function(req, res){
            return authorValidator.validateSelectAuthorParams(req.params.id, res) // Validates parameters
            .then(result => {
                if (result != null) {
                    authorController.selectAuthor(req.params.id, res);
                } else {
                    throw new Error("Author does not exist in our database");
                }
            }).catch(err => {
                res.status(500).render('error', { errorTitle: 'Selecting author error', errorMessage: err.message });
            })
        })

        app.post('/author/', function(req, res){
            authorController.insertAuthor(req.body, res);
        })

        app.put('/author/', function(req, res){
            authorController.updateAuthor(req.body, res);
        })

        app.delete('/author/:id/', function(req, res){
            authorController.deleteAuthor(req.params.id, res);
        })
        
        app.get('/author/:id/books', function(req, res){
            authorController.selectAuthorBooks(req.params.id, res);
        })
    }
}

module.exports = new http();