var bookService = require('./book.service');

function bookController() {

    this.selectBook = function (id, res) {
        return bookService.selectBook(id, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Book selected', resultMessage: result });
        }).catch(err => {
            res.status(500).json({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'bookController', function: 'selectBook'}});
        })
    }

    this.insertBook = function (req, res) {
        return bookService.insertBook(req, res)
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookController', function: 'insertBook'}, data: {message: err.message}});
        })
    }

    this.deleteBook = function (id, res) {
        return bookService.deleteBook(id, res)
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookController', function: 'deleteBook'}, data: {message: err.message}});
        })
    }

    this.selectBookGenres = function (id, res) {
        return bookService.selectBookGenres(id, res)
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookController', function: 'selectBookGenres'}, data: {message: err.message}});
        })
    }

}

module.exports = new bookController();