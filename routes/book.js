var dbBookQueries = require('../repositories/book');

function http() {
    this.configure = function(app) {

        app.get('/book/:id/', function(req, res){
            dbBookQueries.selectBookInfo(req.params.id, res);
        })
    }
}

module.exports = new http();