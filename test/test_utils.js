var assert = require('assert');
var utils = require("../modules/utils")

describe('utils', function() {

  describe('#helloUser()', function() {
    it('Prints salutations', function() {
      assert.equal(utils.helloUser('Mike'), 'Hello, Mike');
    });
  });

});