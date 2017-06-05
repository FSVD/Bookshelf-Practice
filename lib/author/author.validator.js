"use strict";

function authorValidator() {

    this.validateSelectAuthorParams = function(id, res) {
        try {
            var idRegex = /^\d+$/;
            var idCheck = id.match(idRegex);
            if (idCheck == null) throw new Error('Id is invalid');
        } catch (err) {
            return Promise.reject(err);
        }
        return Promise.resolve(id);
    }

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
            return Promise.reject(err);
        }
        return Promise.resolve(req);
    }

    this.validateUpdateAuthorParams = function(req, res) {
        try {
            return this.validateSelectAuthorParams(req.body.id, res)
                .then(result => {
                    return this.validateInsertAuthorParams(req, res)
                    .then(result => {
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