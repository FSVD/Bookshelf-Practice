var authorService = require('../services/author');

function authorController() {

    this.selectAuthor = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(authorService.selectAuthor(id, res)); // Calls service
        }).then((result) => {
            res.json(result); // Sends promise result to client 
        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}}); // Sends error to client 
        })
    }

    this.insertAuthor = function (req, res) {
        authorService.insertAuthor(req, res);
    }

    this.updateAuthor = function (req, res) {
        authorService.updateAuthor(req, res);
    }

    this.deleteAuthor = function (id, res) {
        authorService.deleteAuthor(id, res);
    }

    this.selectAuthorBooks = function (id, res) {
        authorService.selectAuthorBooks(id, res);
    }
}

module.exports = new authorController();