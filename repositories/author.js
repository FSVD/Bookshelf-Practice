var Authors = require('../models/author');
var Books = require('../models/book');


function dbMethods() {

    this.selectAuthor = function (id, res) {

        Authors.where('id', id)
            .fetch()
            .then((author) => {
                var resultObject = JSON.parse(JSON.stringify(author));
                console.log(resultObject.first_name + " " + resultObject.last_name);
                res.json(author);
            })
    },

    this.insertAuthor = function (req, res) {

        if (req.first_name) {
            Authors.forge({
                    first_name: req.first_name,
                    last_name: req.last_name || null,
                    nickname: req.nickname || null
                })
                .save()
                .then((saved) => {
                    res.json({
                        saved
                    })
                })
        } else {
            res.status(400).send('Missing Parameters')
        }
    },

    this.updateAuthor = function (req, res) {

        Authors
            .where({
                id: req.id
            })
            .fetch()
            .then((author) => {
                author.save({
                        first_name: req.first_name || author.first_name,
                        last_name: req.last_name || author.last_name,
                        nickname: req.nickname || null
                    }, {
                        method: 'update',
                        patch: true
                    })
                    .then((update) => {
                        res.json(update);
                    })
            })
    },

    this.deleteAuthor = function (req, res) {

        console.log(req);

        Authors.forge({
                id: req
            })
            .fetch({
                require: true
            })
            .then((author) => {
                author.destroy()
                    .then(() => {
                        res.json("Successfully deleted Author")
                    })
            })
    },

    this.selectAuthorBooks = function (id, res) {

        Authors.where('id', id)
            .fetch({
                withRelated: ['books']
            })
            .then((author) => {

                var resultString = JSON.stringify(author); // Convert query result to JSON string
                var resultObject = JSON.parse(resultString); // Convert JSON to object so we can access to object attributes
                console.log(resultObject.books[0].title); // Read object attribute

                var resultObject2 = JSON.parse(JSON.stringify(author)); // Previous two lines resumed in one line
                console.log(resultObject2.books[0].title);

                res.json(author); // Send result as JSON string
            })
    }
}

module.exports = new dbMethods();