var authorModel = require('../models/author');
var bookModel = require('../models/book');


function dbMethods() {

    this.selectAuthor = function (id, res) {

        authorModel.where('id', id)
            .fetch()
            .then((result) => {
                var resultObject = JSON.parse(JSON.stringify(result));
                console.log(resultObject.first_name + " " + resultObject.last_name);
                res.json(result);
            })
            .catch((err) => {
                res.status(500).json({error: true, data: {message: err.message}});
            });
    },

    this.insertAuthor = function (req, res) {

        if (req.first_name) {
            authorModel.forge({
                    first_name: req.first_name,
                    last_name: req.last_name || null,
                    nickname: req.nickname || null
                })
                .save()
                .then((result) => {
                    res.json({
                        result
                    })
                })
                .catch((err) => {
                res.status(500).json({error: true, data: {message: err.message}});
                });
        } else {
            res.status(400).send('Missing Parameters')
        }
    },

    this.updateAuthor = function (req, res) {

        authorModel
            .where({
                id: req.id
            })
            .fetch()
            .then((result) => {
                result.save({
                        first_name: req.first_name || result.first_name,
                        last_name: req.last_name || result.last_name,
                        nickname: req.nickname || null
                    }, {
                        method: 'update',
                        patch: true
                    })
                    .then((result) => {
                        res.json(result);
                    })
            })
            .catch((err) => {
                res.status(500).json({error: true, data: {message: err.message}});
            });
    },

    this.deleteAuthor = function (req, res) {

        authorModel.forge({
                id: req
            })
            .destroy()
            .catch((err) => {
                console.log(err);
                res.status(500).json({error: true, data: {message: err.message}});
            });
    },

    this.selectAuthorBooks = function (id, res) {

        authorModel.where('id', id)
            .fetch({
                withRelated: ['books']
            })
            .then((result) => {

                var resultString = JSON.stringify(result); // Convert query result to JSON string
                var resultObject = JSON.parse(resultString); // Convert JSON to object so we can access to object attributes
                console.log(resultObject.books[0].title); // Read object attribute

                var resultObject2 = JSON.parse(JSON.stringify(result)); // Previous two lines resumed in one line
                console.log(resultObject2.books[0].title);

                res.json(result); // Send result as JSON string
            })
            .catch((err) => {
                res.status(500).json({error: true, data: {message: err.message}});
            });
    }
}

module.exports = new dbMethods();