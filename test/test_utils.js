var assert = require('assert');
var utils = require("../modules/utils")

describe('utils', function() {

  describe('#helloUser()', function() {
    it(function() {
      assert.equal(utils.helloUser('Mike'), 'Hello, Mike');
    });
  });

});