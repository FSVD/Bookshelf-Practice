var authorRepository = require('../repositories/author');

function authorService() {

    this.selectAuthor = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(authorRepository.selectAuthor(id, res)); // Calls repository to perform operations on DB
        }).then(result => {

            // DATA PROCESSING
            var resultObject = JSON.parse(JSON.stringify(result)); // Converts promise result to a parsed json string
            var authorFullName = resultObject.first_name+" "+resultObject.last_name // Performs any process
            return authorFullName // Returns processed data to controller
            //res.json(result);

        }).catch(err => {
            return err // Returns error to controller
            //res.status(500).json({error: true, data: {message: err.message}});
        })
    }

    this.insertAuthor = function (req, res) {
        if (req.first_name) {
            return new Promise((resolve, reject) => {
                resolve(authorRepository.insertAuthor(req, res));
            }).then(result => {
                res.json(result); // Sends promise result to client 
            }).catch(err => {
                res.status(500).json({error: true, data: {message: err.message}}); // Sends error to client 
            })
        } else {
            res.status(400).send('Missing Parameters'); // Sends message to client 
        }
    }

    this.updateAuthor = function (req, res) {
        return new Promise((resolve, reject) => {
            resolve(authorRepository.updateAuthor(req, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}});
        })
    }

    this.deleteAuthor = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(authorRepository.deleteAuthor(id, res));
        }).then(() => {
            res.send("Author deleted!");
        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}});
        })
    }

    this.selectAuthorBooks = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(authorRepository.selectAuthorBooks(id, res));
        }).then(result => {
            var resultObject = JSON.parse(JSON.stringify(result));
            if (resultObject.books[0] != null) {
                res.json(result);
            } else {
                res.status(400).send("This author has no books!");
            }
        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}});
        })
    }    
}

module.exports = new authorService();