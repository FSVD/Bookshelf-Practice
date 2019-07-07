"use strict";

function http() {
    this.configure = function(app) {
        
        app.get('/', function(req, res){
            res.render('index', { title: 'Library API' });
        })
    }
}

module.exports = new http();
