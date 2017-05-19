var bookService = require('../services/book');

function bookController() {

    this.selectBook = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(bookService.selectBook(id, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookController', function: 'selectBook'}, data: {message: err.message}});
        })
    }

    this.insertBook = function (req, res) {
        return new Promise((resolve, reject) => {
            resolve(bookService.insertBook(req, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookController', function: 'insertBook'}, data: {message: err.message}});
        })
    }

    this.deleteBook = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(bookService.deleteBook(id, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookController', function: 'deleteBook'}, data: {message: err.message}});
        })
    }

    this.selectBookGenres = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(bookService.selectBookGenres(id, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookController', function: 'selectBookGenres'}, data: {message: err.message}});
        })
    }

}

module.exports = new bookController();