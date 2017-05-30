var authorModel = require('./author.model');

function dbMethods() {

    this.selectAuthor = function (id, res) {

        return authorModel.where('id', id)
                          .fetch()
                          .then(result => {
								if (!result) {
									throw new Error("Author does not exist in our database"); // if there is no result throws the error to catch statement
								} else {
									return result // else returns result to service
								}
						  })
                          .catch(err => {
							  	//console.log("Error catched in repository\n "+JSON.stringify(err))
								return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'selectAuthor'}}); // returns a promise rejection with the error to service
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
                          .catch(err => {
                                return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'insertAuthor'}});
                          });
    }

    this.updateAuthor = function (req, res) {

		var id = req.body.id;

		return this.selectAuthor(id, res).then(result => {
												if (!result) {
														throw new Error("Author does not exist in our database"); // if there is no result throws the error to catch statement
												} else {
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
															.catch(err => {
																	throw new Error("Error updating author");
															});
												}
										 })
										 .catch(err => {
										 		return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'updateAuthor'}});
										 });
											   
    }

    this.deleteAuthor = function (id, res) {

		return this.selectAuthor(id, res).then(result => {
											   if (!result) {
											   		throw new Error("Author does not exist in our database"); // if there is no result throws the error to catch statement
											   } else {
													return authorModel.forge({
																			id: id
																	})
																	.destroy()
																	.catch((err) => {
																			return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'deleteAuthor'}});
																	});
											   }
										 })
										 .catch(err => {
											return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'deleteAuthor'}});
										 });
	}
	

    this.selectAuthorBooks = function (id, res) {

        return authorModel.where('id', id)
                          .fetch({
                                withRelated: ['books']
                          })
                          .then(result => {
								if (!result) {
									throw new Error("Author does not exist in our database"); // if there is no result throws the error to catch statement
								} else {
									return result // else returns result to service
								}
						  })
                          .catch((err) => {
                                return Promise.reject({error:err, message:err.message, propagatedBy: {module: 'dbMethods', function: 'selectAuthorBooks'}});
                          });
    }
}

module.exports = new dbMethods();