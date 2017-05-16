var authorModel = require('../models/author');
var bookModel = require('../models/book');
var genreModel = require('../models/genre');


function dbMethods() {

    this.selectBook = function(id, res) {
        
        return bookModel.where('id', id)
                        .fetch()
                        .then((result)=>{
                            return result
                        })
                        .catch((err) => {
                            return err
                        });
    }

    this.selectBookGenres = function (id, res) {

        return bookModel.where('id', id)
                        .fetch({
                            withRelated: ['genres']
                        })
                        .then((result) => {
                            return result
                        })
                        .catch((err) => {
                            return err
                        });
    }
}

module.exports = new dbMethods();