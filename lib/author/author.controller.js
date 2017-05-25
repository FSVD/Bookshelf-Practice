var authorService = require('./author.service');


function authorController() {

    this.selectAuthor = function (id, res) {
        return authorService.selectAuthor(id, res) // Calls service
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Author selected', resultMessage: result }); // Render result
            //res.json(result); // Sends promise result to client 
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'authorController', function: 'selectAuthor'}, data: {message: err.message}});
        })
    }

    this.insertAuthor = function (req, res) {
        return authorService.insertAuthor(req, res)
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'authorController', function: 'insertAuthor'}, data: {message: err.message}});
        })
    }

    this.updateAuthor = function (req, res) {
        return authorService.updateAuthor(req, res)
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'authorController', function: 'updateAuthor'}, data: {message: err.message}});
        })
    }

    this.deleteAuthor = function (id, res) {
        return authorService.deleteAuthor(id, res)
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'authorController', function: 'deleteAuthor'}, data: {message: err.message}});
        })   
    }

    this.selectAuthorBooks = function (id, res) {
        return authorService.selectAuthorBooks(id, res)
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'authorController', function: 'selectAuthorBooks'}, data: {message: err.message}});
        })   
    }
}

module.exports = new authorController();