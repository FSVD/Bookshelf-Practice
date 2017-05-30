var authorService = require('./author.service');

function authorController() {

    this.selectAuthor = function (id, res) {
        return authorService.selectAuthor(id, res) // Calls service
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Author selected', resultMessage: result }); // Render result
            //res.json(result); // Sends promise result to client as json
        }).catch(err => {
            //console.log("Error catched in controller\n "+JSON.stringify(err))
            res.status(500).render('error', { errorTitle: 'Author not selected', errorMessage: JSON.stringify(err) });
            //res.status(500).json({error:err, message:err.message, propagatedBy: {module: 'authorController', function: 'selectAuthor'}});
        })
    }

    this.insertAuthor = function (req, res) {
        return authorService.insertAuthor(req, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Author inserted', resultMessage: JSON.stringify(result) }); 
        }).catch(err => {
            res.status(500).render('error', { errorTitle: 'Author not inserted', errorMessage: err.message });
            //res.status(500).json({error:err, message:err.message, propagatedBy: {module: 'authorController', function: 'insertAuthor'}});
        })
    }

    this.updateAuthor = function (req, res) {
        return authorService.updateAuthor(req, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Author updated', resultMessage: JSON.stringify(result) });
        }).catch(err => {
            res.status(500).render('error', { errorTitle: 'Author not updated', errorMessage: err.message });
            //res.status(500).json({error:err, message:err.message, propagatedBy: {module: 'authorController', function: 'updateAuthor'}});
        })
    }

    this.deleteAuthor = function (id, res) {
        return authorService.deleteAuthor(id, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: 'Author deleted', resultMessage: result });
        }).catch(err => {
            res.status(500).render('error', { errorTitle: 'Author not deleted', errorMessage: err.message });
            //res.status(500).json({error:err, message:err.message, propagatedBy: {module: 'authorController', function: 'deleteAuthor'}});
        })   
    }

    this.selectAuthorBooks = function (id, res) {
        return authorService.selectAuthorBooks(id, res)
        .then(result => {
            res.status(200).render('result', { resultTitle: "Author' books selected", resultMessage: JSON.stringify(result) });
        }).catch(err => {
            res.status(500).render('error', { errorTitle: 'Books not selected', errorMessage: err.message });
            //res.status(500).json({error:err, message:err.message, propagatedBy: {module: 'authorController', function: 'selectAuthorBooks'}});
        })   
    }
}

module.exports = new authorController();