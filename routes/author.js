var authorController = require('../controllers/author');

function http() {
    this.configure = function(app) {

        app.get('/author/:id', function(req, res){
            authorController.selectAuthor(req.params.id, res);
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