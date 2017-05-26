var bookRepository = require('./book.repository');

function bookService() {

    this.selectBook = function (id, res) {
        return bookRepository.selectBook(id, res)
        .then(result => {
            var resultObject = JSON.parse(JSON.stringify(result));
            var bookTitle = resultObject.title
            return bookTitle
        }).catch(err => {
            return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'bookService', function: 'selectBook'}});
        })
    }

    this.insertBook = function (req, res) {
         if (req.title) {
            return bookRepository.insertBook(req, res)
            .then(result => {
                return result
            }).catch(err => {
                res.status(500).json({error: true, number: err.errno, origin: {module: 'bookService', function: 'insertBook'}, data: {message: err.message}});
            })
         } else {
             return 'Missing parameters';
         }
    }

    this.deleteBook = function (id, res) {
        return bookRepository.deleteBook(id, res)
        .then(result => {
            if (result != undefined) return "Book deleted!"
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookService', function: 'deleteBook'}, data: {message: err.message}});
        })
    }

    this.selectBookGenres = function (id, res) {
        return bookRepository.selectBookGenres(id, res)
        .then(result => {
            var resultObject = JSON.parse(JSON.stringify(result));
            if (resultObject.genres[0] != null) {
                return result
            } else {
                return 'This book has no genres!';
            }
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'bookService', function: 'selectBookGenres'}, data: {message: err.message}});
        })
    }

}

module.exports = new bookService();