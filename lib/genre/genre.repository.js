var genreModel = require('./genre.model');

function dbMethods() {

    this.selectAllGenres = function (req, res) {

        return genreModel.fetchAll()
                         .then(result => {
							result = JSON.parse(JSON.stringify(result))
                            if (!result[0]) {
									throw new Error("No genres exist in our database"); // if there is no result throws the error to catch statement
								} else {
									return result // else returns result to service
								}
                         })
                         .catch(err => {
                            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'selectAllGenres'}});
                         });
    }

    this.selectGenreBooks = function (id, res) {

        return genreModel.where('id', id)
                         .fetch({
                               withRelated: ['books']
                         })
                         .then(result => {
                            if (!result) {
									throw new Error("Genre does not exist in our database"); // if there is no result throws the error to catch statement
								} else {
									return result // else returns result to service
								}
                         })
                         .catch(err => {
                            return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'selectGenreBooks'}});
                         });
    }
}

module.exports = new dbMethods();