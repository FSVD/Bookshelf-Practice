var authorModel = require('./author.model');

function dbMethods() {

    this.selectAuthor = function (id, res) {

        return authorModel.where('id', id)
                          .fetch()
                          .then((result) => {
								if (!result) {
									throw new Error("Author does not exist in our database"); // If there is no result throws the error to promise catch statement
								} else {
									return Promise.resolve(result)
								}
						  })
                          .catch((err) => {
								return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'dbMethods', function: 'selectAuthor'}}); // Return a promise rejection with the error to service
                          });
    }

    this.insertAuthor = function (req, res) {

        return authorModel.forge({
                                first_name: req.body.first_name,
                                last_name: req.body.last_name || null,
                                nickname: req.body.nickname || null
                          })
                          .save()
                          .then()
                          .catch((err) => {
                                return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'dbMethods', function: 'insertAuthor'}});
                          });
    }

    this.updateAuthor = function (req, res) {

        return authorModel.where({
                                id: req.body.id
                          })
                          .fetch()
                          .then((result) => {
                                return result.save({
                                                first_name: req.body.first_name || result.first_name,
                                                last_name: req.body.last_name || result.last_name,
                                                nickname: req.body.nickname || null
                                             },
                                             {
                                                method: 'update',
                                                patch: true
                                             })
                                             .then()
                          })
                          .catch((err) => {
                                return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'dbMethods', function: 'updateAuthor'}});
                          });
    }

    this.deleteAuthor = function (req, res) {

        return authorModel.forge({
                                id: req
                          })
                          .destroy()
                          .catch((err) => {
							  	return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'dbMethods', function: 'deleteAuthor'}});
                          });
    }

    this.selectAuthorBooks = function (id, res) {

        return authorModel.where('id', id)
                          .fetch({
                                withRelated: ['books']
                          })
                          .then()
                          .catch((err) => {
                                return Promise.reject({errorInfo: {data:err, message:err.message}, propagatedBy: {module: 'dbMethods', function: 'selectAuthorBooks'}});
                          });
    }
}

module.exports = new dbMethods();