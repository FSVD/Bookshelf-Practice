var authorRepository = require('./author.repository');

function authorService() {

    this.selectAuthor = function (id, res) {
        return authorRepository.selectAuthor(id, res) // Calls repository to perform operations on DB
        .then(result => {

            // DATA PROCESSING
            var resultObject = JSON.parse(JSON.stringify(result)); // Converts promise result to a parsed json string
            var authorFullName = resultObject.first_name+" "+resultObject.last_name // Performs any process
            return authorFullName // Returns processed data to controller
            //res.json(result);

        }).catch(err => {
            //console.log("Error catched in service")
            return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'authorService', function: 'selectAuthor'}}); // Return a promise rejection with the error to controller
        })
    }

    this.insertAuthor = function (req, res) {
        return authorRepository.insertAuthor(req, res)
        .then(result => {
            return result
        }).catch(err => {
            return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'authorService', function: 'insertAuthor'}});
        })
    }

    this.updateAuthor = function (req, res) {
        return authorRepository.updateAuthor(req, res)
        .then(result => {
            return result
        }).catch(err => {
            return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'authorService', function: 'updateAuthor'}});
        })
    }

    this.deleteAuthor = function (id, res) {
        return authorRepository.deleteAuthor(id, res)
        .then((result) => {
            if (result != undefined) return "Author "+id+" deleted!";
        }).catch(err => {
            return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'authorService', function: 'deleteAuthor'}});
        })
    }

    this.selectAuthorBooks = function (id, res) {
        return authorRepository.selectAuthorBooks(id, res)
        .then(result => {
            var resultObject = JSON.parse(JSON.stringify(result));
            if (resultObject.books[0] != null) {
                return result
            } else {
                return 'This author has no books!';
            }
        }).catch(err => {
            return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'authorService', function: 'selectAuthorBooks'}});
        })
    }
}

module.exports = new authorService();