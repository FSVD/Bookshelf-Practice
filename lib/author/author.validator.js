var assert = require('assert');

function authorValidator() {

    this.validateSelectAuthorParams = function(id) {
        assert.equal(typeof(id), 'string', "id must be a string");
    }

}

module.exports = new authorValidator();