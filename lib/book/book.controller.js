"use strict";

var bookService = require('./book.service');

function bookController() {

    this.selectBook = function (id, res) {
        return bookService.selectBook(id, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Book selected', resultMessage: result });
        }).catch(err => {
            res.status(500).render('error', { errorTitle: 'Book not selected', errorMessage: err.message });
        })
    }

    this.insertBook = function (req, res) {
        return bookService.insertBook(req, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Book inserted', resultMessage: JSON.stringify(result) });
        }).catch(err => {
            res.status(500).render('error', { errorTitle: 'Book not inserted', errorMessage: err.message });
        })
    }

    this.updateBook = function (req, res) {
        return bookService.updateBook(req, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Book updated', resultMessage: JSON.stringify(result) });
        }).catch(err => {
            res.status(500).render('error', { errorTitle: 'Book not updated', errorMessage: err.message });
        })
    }

    this.deleteBook = function (id, res) {
        return bookService.deleteBook(id, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Book deleted', resultMessage: result });
        }).catch(err => {
            res.status(500).render('error', { errorTitle: 'Book not deleted', errorMessage: err.message });
        })
    }

    this.selectBookGenres = function (id, res) {
        return bookService.selectBookGenres(id, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Book\' genres selected', resultMessage: JSON.stringify(result) });
        }).catch(err => {
            res.status(500).render('error', { errorTitle: 'Genres not selected', errorMessage: err.message });
        })
    }

}

module.exports = new bookController();