var authorModel = require('../models/author');
var bookModel = require('../models/book');


function dbMethods() {

    this.selectAuthor = function (id, res) {

        return authorModel.where('id', id)
                          .fetch()
                          .then()
                          .catch((err) => {
                                res.status(500).json({error: true, origin: {module: 'dbMethods', function: 'selectAuthor'}, data: {message: err.message}});
                          });
    }

    this.insertAuthor = function (req, res) {

        return authorModel.forge({
                                first_name: req.first_name,
                                last_name: req.last_name || null,
                                nickname: req.nickname || null
                          })
                          .save()
                          .then()
                          .catch((err) => {
                                res.status(500).json({error: true, origin: {module: 'dbMethods', function: 'insertAuthor'}, data: {message: err.message}});
                          });
    }

    this.updateAuthor = function (req, res) {

        return authorModel.where({
                                id: req.id
                          })
                          .fetch()
                          .then((result) => {
                                return result.save({
                                                first_name: req.first_name || result.first_name,
                                                last_name: req.last_name || result.last_name,
                                                nickname: req.nickname || null
                                             },
                                             {
                                                method: 'update',
                                                patch: true
                                             })
                                             .then()
                          })
                          .catch((err) => {
                                res.status(500).json({error: true, origin: {module: 'dbMethods', function: 'updateAuthor'}, data: {message: err.message}});
                          });
    }

    this.deleteAuthor = function (req, res) {

        return authorModel.forge({
                                id: req
                          })
                          .destroy()
                          .catch((err) => {
								res.status(500).json({error: true, origin: {module: 'dbMethods', function: 'deleteAuthor'}, data: {message: err.message}});
                          });
    }

    this.selectAuthorBooks = function (id, res) {

        return authorModel.where('id', id)
                          .fetch({
                                withRelated: ['books']
                          })
                          .then()
                          .catch((err) => {
                                res.status(500).json({error: true, origin: {module: 'dbMethods', function: 'selectAuthorBooks'}, data: {message: err.message}});
                          });
    }
}

module.exports = new dbMethods();