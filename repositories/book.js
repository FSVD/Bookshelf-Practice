var authorModel = require('../models/author');
var bookModel = require('../models/book');
var genreModel = require('../models/genre');


function dbMethods() {

    this.selectBook = function(id, res) {
        
        bookModel.where('id', id)
                 .fetch()
                 .then((result)=>{
                    var resultString = JSON.stringify(result); // Convert query result to JSON string
                    var resultObject = JSON.parse(resultString); // Convert JSON to object so we can access to object attributes
                    console.log(resultObject.title); // Read object attribute

                    var resultObject2 = JSON.parse(JSON.stringify(result)); // Previous two lines resumed in one line
                    console.log(resultObject2.title);

                    res.json(result); // Send result as JSON string
                 })
                 .catch((err) => {
                    res.status(500).json({error: true, data: {message: err.message}});
                 });
    }

    this.selectBookGenres = function (id, res) {

        bookModel.where('id', id)
                 .fetch({
                    withRelated: ['genres']
                 })
                 .then((result) => {
                    var resultObject = JSON.parse(JSON.stringify(result));
                    console.log(resultObject);
                    res.json(result);
                 })
                 .catch((err) => {
                    res.status(500).json({error: true, data: {message: err.message}});
                 });
    }
}

module.exports = new dbMethods();