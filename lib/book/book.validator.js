var bookRepository = require('./book.repository');

function bookValidator() {

    this.validateSelectBookParams = function(id, res) {
        try {
            var idRegex = /^\d+$/;
            var idCheck = id.match(idRegex);
            if (idCheck == null) { // If id is invalid throws the error to catch statement
                throw new Error('Id is invalid');
            } else { // Else verify if id exists in DB
                return bookRepository.selectBook(id, res) // Calls repository
                .then((result) => {
                    if (!result) throw new Error("Book does not exist in our database"); // If there is no result throws the error to promise catch statement
                })
                .catch(err => {
                    //console.log("Error catched in validator promise catch, sending back to router...");
                    return Promise.reject(err); // Return a promise rejection with the error
                })
            }
        } catch (err) {
            //console.log("Error catched in validator try catch, sending back to router...");
            return Promise.reject(err); // Return a promise rejection with the error
        }
    }
}

module.exports = new bookValidator();