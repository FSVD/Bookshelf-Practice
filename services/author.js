var authorRepository = require('../repositories/author');

function authorService() {

    this.selectAuthor = function (id, res) {
        authorRepository.selectAuthor(id, res);
    }

    this.insertAuthor = function (req, res) {
        authorRepository.insertAuthor(req, res);
    }

    this.updateAuthor = function (req, res) {
        authorRepository.updateAuthor(req, res);
    }

    this.deleteAuthor = function (id, res) {
        authorRepository.deleteAuthor(id, res);
    }

    this.selectAuthorBooks = function (id, res) {
        authorRepository.selectAuthorBooks(id, res);
    }    
}

module.exports = new authorService();