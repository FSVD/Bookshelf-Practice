var Authors = require('../models/author');
var Books = require('../models/book');


function dbMethods() {
    
    this.selectAuthorBooksById = function(id, res) {

        var result = Authors
        .where('id', id)
        .fetch({withRelated: ['books']})
        .then(function(author) {
            console.log(author.related('books').toJSON());
            res.send("Author "+id+" has written: ..."+author.related('books').toJSON());
        })
        .catch(function(err) {
            console.error(err);
        });

        //res.send("Author "+id+" has written: ..."+result);
    }

    this.selectAuthorInfo = function(id, res) {
        res.send("Author "+id+" info: ...");
    }
}

module.exports = new dbMethods();