"use strict";

var bookRepository = require('./book.repository');

function bookService() {

    this.selectBook = function (id, res) {
        return bookRepository.selectBook(id, res)
        .then(result => {
            var resultObject = JSON.parse(JSON.stringify(result));
            var bookTitle = resultObject.title;
            result = bookTitle;
            return result
        }).catch(err => {
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'bookService', function: 'selectBook'}});
        })
    }

    this.insertBook = function (req, res) {
        return bookRepository.insertBook(req, res)
        .then(result => {
            return result
        }).catch(err => {
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'bookService', function: 'insertBook'}});
        })
    }

    this.updateBook = function (req, res) {
        return bookRepository.updateBook(req, res)
        .then(result => {
            return result
        }).catch(err => {
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'bookService', function: 'updateBook'}});
        })
    }

    this.deleteBook = function (id, res) {
        return bookRepository.deleteBook(id, res)
        .then(result => {
            if (result != undefined) return 'Book '+id+' deleted!';
        }).catch(err => {
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'bookService', function: 'deleteBook'}});
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
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'bookService', function: 'selectBookGenres'}});
        })
    }

}

module.exports = new bookService();