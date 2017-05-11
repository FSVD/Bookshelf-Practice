var dbBookshelfQueries = require('../repositories/bookshelf');

function http() {
    this.configure = function(app) {
        
        app.get('/authorbooks/:id/', function(req, res){
            dbBookshelfQueries.selectAuthorBooksById(req.params.id, res);
        })

        app.get('/book/', function(req, res){
            dbBookshelfQueries.selectBooks(res);
        })
    }
}

module.exports = new http();