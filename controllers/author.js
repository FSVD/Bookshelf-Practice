var authorService = require('../services/author');

function authorController() {

    this.selectAuthor = function (id, res) {
        authorService.selectAuthor(id, res);
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