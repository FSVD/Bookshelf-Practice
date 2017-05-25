var authorRepository = require('./author.repository');

function authorValidator() {

    this.validateSelectAuthorParams = function(id, res) {

        var regex = /^\d+$/;
        var idCheck = id.match(regex);

        try {
            if (idCheck == null) { // If id is invalid throws an error
                throw new Error("id is invalid");
            } else { // Else verify if id exists in DB
                return authorRepository.selectAuthor(id, res) // Calls repository
                .then((result) => {
                    if (!result) throw new Error("Author does not exist in our database");
                })
                .catch(err => {
                    console.log(err.message);
                    throw err
                    //res.status(500).json({error: true, number: err.errno, origin: {module: 'authorValidator', function: 'validateSelectAuthorParams'}, data: {message: err.message}});
                })
            }
        } catch (err) {
            console.log(err.message);
            throw err
        }
    }
}

module.exports = new authorValidator();