var authorRepository = require('./author.repository');

function authorValidator() {

    this.validateSelectAuthorParams = function(id, res) {

        var regex = /^\d+$/;
        var idCheck = id.match(regex);

        if (idCheck == null) { // If id is invalid throws an error
            throw new Error("id is invalid");
        } else { // Else verify if id exists in DB
            return authorRepository.selectAuthor(id, res) // Calls repository
            .then()
            .catch(err => {
                res.status(500).json({error: true, number: err.errno, origin: {module: 'authorValidator', function: 'validateSelectAuthorParams'}, data: {message: err.message}});
            })
        }
    }
}

module.exports = new authorValidator();