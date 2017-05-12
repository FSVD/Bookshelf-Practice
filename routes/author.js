var dbAuthorQueries = require('../repositories/author');

function http() {
    this.configure = function(app) {
        
        app.get('/authorbooks/:id/', function(req, res){
            dbAuthorQueries.selectAuthorBooksById(req.params.id, res);
        })

        app.get('/author/:id', function(req, res){
            dbAuthorQueries.selectAuthorInfo(req.params.id, res);
        })
    }
}

module.exports = new http();