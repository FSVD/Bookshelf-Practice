var Authors = require('../models/author');
var Books = require('../models/book');


function dbMethods() {

    this.selectBookInfo = function(id, res) {
        Books.where('id', id)
               .fetch()
               .then((book)=>{
                    var bookString = JSON.stringify(book); // Convert query result to JSON string
                    var bookObject = JSON.parse(bookString); // Convert JSON to object so we can access to object attributes
                    console.log(bookObject.title); // Read object property
                    res.json(book); // Send result as JSON string
                })
    }
}

module.exports = new dbMethods();