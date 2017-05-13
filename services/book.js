var bookRepository = require('../repositories/book');

function bookService() {

    this.selectBook = function (id, res) {
        bookRepository.selectBook(id, res);
    }

    this.selectBookGenres = function (id, res) {
        bookRepository.selectBookGenres(id, res);
    }

}

module.exports = new bookService();