var Authors = require('../models/author');
var Books = require('../models/book');


function dbMethods() {

    this.selectBookInfo = function(id, res) {
        Books.where('id', id)
               .fetch()
               .then((book)=>{
                    console.log(book);
                    res.json(book);
                })
    }
}

module.exports = new dbMethods();