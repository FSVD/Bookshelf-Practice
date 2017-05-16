var authorModel = require('../models/author');
var bookModel = require('../models/book');


function dbMethods() {

    this.selectAuthor = function (id, res) {

        return authorModel.where('id', id)
                          .fetch()
                          .then((result) => {
                                return result // Return result to service
                          })
                          .catch((err) => {
                                return err // Return error to service
                          });
    }

    this.insertAuthor = function (req, res) {

        return authorModel.forge({
                                first_name: req.first_name,
                                last_name: req.last_name || null,
                                nickname: req.nickname || null
                          })
                          .save()
                          .then((result) => {
                                return result
                          })
                          .catch((err) => {
                                return err
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
                                             .then((result) => {
                                                return result
                                             })
                          })
                          .catch((err) => {
                                return err
                          });
    }

    this.deleteAuthor = function (req, res) {

        return authorModel.forge({
                                id: req
                          })
                          .destroy()
                          .catch((err) => {
                                return err
                          });
    }

    this.selectAuthorBooks = function (id, res) {

        return authorModel.where('id', id)
                          .fetch({
                                withRelated: ['books']
                          })
                          .then((result) => {
                                return result
                          })
                          .catch((err) => {
                                return err
                          });
    }
}

module.exports = new dbMethods();