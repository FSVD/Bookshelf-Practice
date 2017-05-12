var Authors = require('../models/author');
var Books = require('../models/book');


function dbMethods() {
    
    this.selectAuthorBooksById = function(id, res) {

        Authors.where('id', id)
               .fetch({withRelated: ['books']})
               .then((author)=>{
                    var authorString = JSON.stringify(author); // Convert query result to JSON string
                    var authorObject = JSON.parse(authorString); // Convert JSON to object so we can access to object attributes
                    console.log(authorObject.books[0].title); // Read object property
                    res.json(author); // Send result as JSON string
                })
    },

    this.selectAuthorInfo = function(id, res) {

        Authors.where('id', id)
               .fetch()
               .then((author)=>{
                    var authorString = JSON.stringify(author);
                    var authorObject = JSON.parse(authorString);
                    console.log(authorObject.first_name+" "+authorObject.last_name);
                    res.json(author);
                })
    }
}

module.exports = new dbMethods();