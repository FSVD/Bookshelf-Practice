var Authors = require('../models/author');
var Books = require('../models/book');


function dbMethods() {
    
    this.selectAuthorBooksById = function(id, res) {

        Authors.where('id', id)
               .fetch({withRelated: ['books']})
               .then((author)=>{
                    console.log(author);
                    res.json(author);
                })
    },

    this.selectAuthorInfo = function(id, res) {

        Authors.where('id', id)
               .fetch()
               .then((author)=>{
                    res.json(author);
                })
    }
}

module.exports = new dbMethods();