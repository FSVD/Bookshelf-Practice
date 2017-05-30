var bookRepository = require('./book.repository');

function bookValidator() {

    this.validateSelectBookParams = function(id, res) {
        try {
            var idRegex = /^\d+$/;
            var idCheck = id.match(idRegex);
            if (idCheck == null) throw new Error('Id is invalid');
        } catch (err) {
            return Promise.reject(err);
        }
        return Promise.resolve(id);
    }

    this.validateInsertBookParams = function(req, res) {
        try {
            if (req.body.author_id && req.body.title && req.body.year && req.body.isbn) {
                var idRegex = /^\d+$/;
                var idCheck = req.body.author_id.match(idRegex);
                if (idCheck == null) throw new Error('Author id is invalid');
                var yearRegex = /^\d+$/;
                var yearCheck = req.body.year.match(yearRegex);
                var isbnRegex = /^\d+$/;
                var isbnCheck = req.body.isbn.match(isbnRegex);
                if (yearCheck == null || isbnCheck == null) throw new Error('Year or isbn is invalid');
            } else {
                throw new Error('All fields are required');
            }
        } catch (err) {
            return Promise.reject(err);
        }
        return Promise.resolve(req);
    }

}

module.exports = new bookValidator();