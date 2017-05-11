var db = require('../config/db');

var Authors = db.Model.extend({
  tableName: 'authors',

  books: function() {
    return this.hasMany(Books);
  }

});

var Books = db.Model.extend({
  tableName: 'books'
});

function dbMethods() {
    
    this.selectAuthorBooksById = function(id, res) {

        Authors.where('id', id).fetch({withRelated: ['books']}).then(function(author) {

            console.log(author.related('books').toJSON());
            var result = author.related('books').toJSON();
            res.send("Author "+id+" has: "+result);

        }).catch(function(err) {
            console.error(err);
        });

    }

    this.selectBooks = function(res) {
        res.send(console.log('Selecting books'));
    }
}

module.exports = new dbMethods();