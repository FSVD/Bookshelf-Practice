var bookService = require('../services/book');

function bookController() {

    this.selectBook = function (id, res) {
        bookService.selectBook(id, res);
    }

    this.insertBook = function (req, res) {
        bookService.insertBook(req, res);
    }

    this.deleteBook = function (id, res) {
        bookService.deleteBook(id, res);    
    }

    this.selectBookGenres = function (id, res) {
        bookService.selectBookGenres(id, res);
    }

}

module.exports = new bookController();