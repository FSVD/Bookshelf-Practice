function http() {
    this.configure = function(app) {
        
        app.get('/', function(req, res){
            res.render('index', { title: 'Bookshelf Practice' });
        })
    }
}

module.exports = new http();
