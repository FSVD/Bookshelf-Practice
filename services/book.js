var bookRepository = require('../repositories/book');

function bookService() {

    this.selectBook = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(bookRepository.selectBook(id, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}});
        })
    }

    this.insertBook = function (req, res) {
        return new Promise((resolve, reject) => {
            resolve(bookRepository.insertBook(req, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}});
        })
    }

    this.selectBookGenres = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(bookRepository.selectBookGenres(id, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, data: {message: err.message}});
        })
    }

}

module.exports = new bookService();