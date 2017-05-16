var authorRepository = require('../repositories/author');

function authorService() {

    this.selectAuthor = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(authorRepository.selectAuthor(id, res));
        }).then(result => {

            var resultString = JSON.stringify(result); // Convert query result to JSON string
            var resultObject = JSON.parse(resultString); // Convert JSON to object so we can access to object attributes
            console.log("Result attribute: "+resultObject.first_name); // Read object attribute

            var resultObject2 = JSON.parse(JSON.stringify(result)); // Previous two lines resumed in one line
            console.log("Result attribute: "+resultObject2.first_name);

            res.json(result);

        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}});
        })
    }

    this.insertAuthor = function (req, res) {
        return new Promise((resolve, reject) => {
            resolve(authorRepository.insertAuthor(req, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}});
        })
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
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}});
        })
    }    
}

module.exports = new authorService();