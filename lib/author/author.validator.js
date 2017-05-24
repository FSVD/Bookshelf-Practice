var authorRepository = require('./author.repository');

function authorValidator() {

    this.validateSelectAuthorParams = function(id, res) {

        var regex = /^\d+$/;
        var idCheck = id.match(regex);

        if (idCheck == null) { // If id is invalid send back an error
            throw new Error("id is invalid");
        } else { // Else verify if id exists in DB
            return new Promise((resolve, reject) => {
                resolve(authorRepository.selectAuthor(id, res)); // Calls service
            }).then(result => {
                if (result == null) throw new Error("Author does not exist in our database");
            }).catch(err => {
                res.status(500).render('error', { errorTitle: 'No author found', errorMessage: err.message });
            })
        }
    }
}

module.exports = new authorValidator();