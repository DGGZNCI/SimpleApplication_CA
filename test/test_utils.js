var assert = require('assert');
var utils = require("../modules/utils")

describe('utils', () => {

  it('formats user data into a labeled block', () => {
    const result = utils.getUserData('Alice', '25', 'alice@example.com');
    const expected =
      'Username: Alice\nAge: 25\nEmail: alice@example.com';

    assert.strictEqual(result, expected);
  });

  it('handles missing age', () => {
    const result = utils.getUserData('Bob', undefined, 'bob@example.com');
    const expected =
      'Username: Bob\nAge: undefined\nEmail: bob@example.com';

    assert.strictEqual(result, expected);
  });

  it('handles missing email', () => {
    const result = utils.getUserData('Charlie', '40', undefined);
    const expected =
      'Username: Charlie\nAge: 40\nEmail: undefined';

    assert.strictEqual(result, expected);
  });

  it('handles empty strings', () => {
    const result = utils.getUserData('', '', '');
    const expected =
      'Username: \nAge: \nEmail: ';

    assert.strictEqual(result, expected);
  });

  it('converts numbers to strings', () => {
    const result = utils.getUserData('Dave', 30, 12345);
    const expected =
      'Username: Dave\nAge: 30\nEmail: 12345';

    assert.strictEqual(result, expected);
  });

});