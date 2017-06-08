"use strict";

function genreValidator() {

    var self = this;

    self.validateSelectGenreParams = function(id, res) {
        try {
            var idRegex = /^\d+$/;
            var idCheck = id.match(idRegex);
            if (idCheck === null) throw new Error('Id is invalid');
        } catch (err) {
            return Promise.reject(err);
        }
        return Promise.resolve(id);
    };

    self.validateSelectGenreBooksParams = function(id, res) {
        return self.validateSelectGenreParams(id, res);
    };

}

module.exports = new genreValidator();