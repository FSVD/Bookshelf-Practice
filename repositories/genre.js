var authorModel = require('../models/author');
var bookModel = require('../models/book');
var genreModel = require('../models/genre');


function dbMethods() {

    this.selectAllGenres = function (req, res) {

        genreModel
            .fetchAll()
            .then((result) => {
                var resultObject = JSON.parse(JSON.stringify(result));
                console.log(resultObject[0].name);
                res.json(result); // Send an objects collection/array
            })
            .catch((err) => {
                res.status(500).json({error: true, data: {message: err.message}});
            });
    }

    this.selectGenreBooks = function (id, res) {

        genreModel.where('id', id)
            .fetch({
                withRelated: ['books']
            })
            .then((result) => {

                var resultObject = JSON.parse(JSON.stringify(result)); // Previous two lines resumed in one line
                console.log(resultObject.books[0].title);

                res.json(result); // Send result as JSON string

            })
            .catch((err) => {
                res.status(500).json({error: true, data: {message: err.message}});
            });
    }
}

module.exports = new dbMethods();