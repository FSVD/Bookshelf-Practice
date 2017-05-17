function customErrorHandler (message, where) {

    this.name = "Custom Error Handler";
    this.message = message || "Something wrong has occurred!";
	this.where = where || "Somewhere in your code...";

}

customErrorHandler.prototype = new Error(); // Extends Error class
customErrorHandler.prototype.constructor = customErrorHandler;

module.exports = customErrorHandler;