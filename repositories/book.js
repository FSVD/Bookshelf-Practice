var Authors = require('../models/author');
var Books = require('../models/book');


function dbMethods() {

    this.selectBookInfo = function(id, res) {
        
        Books.where('id', id)
               .fetch()
               .then((book)=>{

                    var resultString = JSON.stringify(book); // Convert query result to JSON string
                    var resultObject = JSON.parse(resultString); // Convert JSON to object so we can access to object attributes
                    console.log(resultObject.title); // Read object attribute

                    var resultObject2 = JSON.parse(JSON.stringify(book)); // Previous two lines resumed in one line
                    console.log(resultObject2.title);

                    res.json(book); // Send result as JSON string
                })
    }
}

module.exports = new dbMethods();