var Authors = require('../models/author');
var Books = require('../models/book');


function dbMethods() {

    this.selectBookInfo = function(id, res) {
        res.send("Book "+id+" info: ...");
    }
}

module.exports = new dbMethods();