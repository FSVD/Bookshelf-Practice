"use strict";

function genreValidator() {

    this.validateSelectGenreParams = function(id, res) {
        try {
            var idRegex = /^\d+$/;
            var idCheck = id.match(idRegex);
            if (idCheck == null) throw new Error('Id is invalid');
        } catch (err) {
            return Promise.reject(err);
        }
        return Promise.resolve(id);
    }

    this.validateSelectGenreBooksParams = function(id, res) {
        return this.validateSelectGenreParams(id, res);
    }

}

module.exports = new genreValidator();