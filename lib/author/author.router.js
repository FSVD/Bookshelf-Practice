"use strict";

var authorValidator = require('./author.validator');
var authorController = require('./author.controller');

function http() {

    var self = this;

    self.configure = function(app) {

        app.get('/author/:id', function(req, res){
            authorValidator.validateSelectAuthorParams(req.params.id, res) // Validates request
            .then(result => {
                authorController.selectAuthor(req.params.id, res);
            }).catch(err => {
                //console.log("Error catched in router\n "+JSON.stringify(err))
                res.status(500).render('error', { errorTitle: 'Selecting author error', errorMessage: err.message });
            })
        })

        app.post('/author/', function(req, res){
            authorValidator.validateInsertAuthorParams(req, res)
            .then(result => {
                authorController.insertAuthor(req, res);
            }).catch(err => {
                res.status(500).render('error', { errorTitle: 'Inserting author error', errorMessage: err.message });
            })
        })

        app.put('/author/', function(req, res){
            authorValidator.validateUpdateAuthorParams(req, res)
            .then(result => {
                authorController.updateAuthor(req, res);
            }).catch(err => {
                res.status(500).render('error', { errorTitle: 'Updating author error', errorMessage: err.message });
            })
        })

        app.delete('/author/:id/', function(req, res){
            authorValidator.validateDeleteAuthorParams(req.params.id, res)
            .then(result => {
                authorController.deleteAuthor(req.params.id, res);
            }).catch(err => {
                res.status(500).render('error', { errorTitle: 'Deleting author error', errorMessage: err.message });
            })
        })
        
        app.get('/author/:id/books', function(req, res){
            authorValidator.validateSelectAuthorBooksParams(req.params.id, res)
            .then(result => {
                authorController.selectAuthorBooks(req.params.id, res);
            }).catch(err => {
                res.status(500).render('error', { errorTitle: 'Selecting author\' books error', errorMessage: err.message });
            })
        })
    }
}

module.exports = new http();