var authorRepository = require('./author.repository');

function authorValidator() {

    this.validateSelectAuthorParams = function(id, res) {
        try {
            var idRegex = /^\d+$/;
            var idCheck = id.match(idRegex);
            if (idCheck == null) throw new Error('Id is invalid');
        } catch (err) {
            //console.log("Error catched in validator try catch, sending back to router...");
            return Promise.reject(err); // Return a promise rejection with the error
        }
        return Promise.resolve(id);
    }

    /*this.validateSelectAuthorParams = function(id, res) {
        try {
            var idRegex = /^\d+$/;
            var idCheck = id.match(idRegex);
            if (idCheck == null) { // If id is invalid throws the error to catch statement
                throw new Error('Id is invalid');
            } else { // Else verify if id exists in DB
                return authorRepository.selectAuthor(id, res) // Calls repository
                .then((result) => {
                    if (!result) throw new Error("Author does not exist in our database"); // If there is no result throws the error to promise catch statement
                })
                .catch(err => {
                    //console.log("Error catched in validator promise catch, sending back to router...");
                    return Promise.reject(err); // Return a promise rejection with the error
                })
            }
        } catch (err) {
            //console.log("Error catched in validator try catch, sending back to router...");
            return Promise.reject(err); // Return a promise rejection with the error
        }
    }*/

    this.validateInsertAuthorParams = function(req, res) {
        try {
            if (req.body.first_name && req.body.last_name) {
                var firstnameRegex = /^[a-zA-Z ]+$/;
                var firstnameCheck = req.body.first_name.match(firstnameRegex);
                var lastnameRegex = /^[a-zA-Z ]+$/;
                var lastnameCheck = req.body.last_name.match(lastnameRegex);
                if (firstnameCheck == null || lastnameCheck == null) throw new Error('Firstname or lastname is invalid');
            } else {
                throw new Error('Both firstname and lastname are required');
            }
        } catch (err) {
            return Promise.reject(err); // Return a promise rejection with the error
        }

        return Promise.resolve(req);
    }

    this.validateUpdateAuthorParams = function(req, res) {
        try {
            return this.validateSelectAuthorParams(req.body.id, res)
                .then((result) => {
                    return this.validateInsertAuthorParams(req, res)
                    .then((result) => {
                        return Promise.resolve(req);
                    })
                })
                .catch(err => {
                    return Promise.reject(err);
                })
        } catch (err) {
            return Promise.reject(err);
        }
    }

    this.validateDeleteAuthorParams = function(id, res) {
        return this.validateSelectAuthorParams(id, res);
    }

    this.validateSelectAuthorBooksParams = function(id, res) {
        return this.validateSelectAuthorParams(id, res);
    }

}

module.exports = new authorValidator();