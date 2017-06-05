"use strict";

var authorRepository = require('./author.repository');

function authorService() {

    this.selectAuthor = function (id, res) {
        return authorRepository.selectAuthor(id, res) // calls repository to perform operations on DB
        .then(result => {

            // DATA PROCESSING
            var resultObject = JSON.parse(JSON.stringify(result)); // converts promise result to a parsed json string
            var authorFullName = resultObject.first_name+" "+resultObject.last_name; // performs any process
            result = authorFullName;
            
            return result // returns processed data to controller

        }).catch(err => {
            //console.log("Error catched in service\n "+JSON.stringify(err))
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'authorService', function: 'selectAuthor'}}); // returns a promise rejection with the error to controller
        })
    }

    this.insertAuthor = function (req, res) {
        return authorRepository.insertAuthor(req, res)
        .then(result => {
            return result
        }).catch(err => {
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'authorService', function: 'insertAuthor'}});
        })
    }

    this.updateAuthor = function (req, res) {
        return authorRepository.updateAuthor(req, res)
        .then(result => {
            return result
        }).catch(err => {
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'authorService', function: 'updateAuthor'}});
        })
    }

    this.deleteAuthor = function (id, res) {
        return authorRepository.deleteAuthor(id, res)
        .then(result => {
            if (result != undefined) return 'Author '+id+' deleted!';
        }).catch(err => {
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'authorService', function: 'deleteAuthor'}});
        })
    }

    this.selectAuthorBooks = function (id, res) {
        return authorRepository.selectAuthorBooks(id, res)
        .then(result => {
            var resultObject = JSON.parse(JSON.stringify(result));
            if (resultObject.books[0] != null) {
                return result
            } else {
                return 'This author has no books!';
            }
        }).catch(err => {
            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'authorService', function: 'selectAuthorBooks'}});
        })
    }
}

module.exports = new authorService();