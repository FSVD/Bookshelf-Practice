var bookRepository = require('../repositories/book');

function bookService() {

    this.selectBook = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(bookRepository.selectBook(id, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookService', function: 'selectBook'}, data: {message: err.message}});
        })
    }

    this.insertBook = function (req, res) {
         if (req.title) {
            return new Promise((resolve, reject) => {
                resolve(bookRepository.insertBook(req, res));
            }).then(result => {
                res.json(result);
            }).catch(err => {
                res.status(500).json({error: true, number: err.errno, origin: {module: 'bookService', function: 'insertBook'}, data: {message: err.message}});
            })
         } else {
             res.status(400).json({error: true, number: err.errno, origin: {module: 'bookService', function: 'insertBook'}, data: {message: 'Missing parameters'}});
         }
    }

    this.deleteBook = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(bookRepository.deleteBook(id, res));
        }).then((result) => {
            if (result != undefined) res.send("Book deleted!");
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookService', function: 'deleteBook'}, data: {message: err.message}});
        })
    }

    this.selectBookGenres = function (id, res) {
        return new Promise((resolve, reject) => {
            resolve(bookRepository.selectBookGenres(id, res));
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookService', function: 'selectBookGenres'}, data: {message: err.message}});
        })
    }

}

module.exports = new bookService();