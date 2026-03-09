var assert = require('assert');
var utils = require("../modules/utils")

describe('getUserData', () => {

  test('formats user data into a labeled block', () => {
    const result = getUserData('Alice', '25', 'alice@example.com');
    expect(result).toBe(
      'Username: Alice\nAge: 25\nEmail: alice@example.com'
    );
  });

  test('handles missing age', () => {
    const result = getUserData('Bob', undefined, 'bob@example.com');
    expect(result).toBe(
      'Username: Bob\nAge: undefined\nEmail: bob@example.com'
    );
  });

  test('handles missing email', () => {
    const result = getUserData('Charlie', '40', undefined);
    expect(result).toBe(
      'Username: Charlie\nAge: 40\nEmail: undefined'
    );
  });

  test('handles empty strings', () => {
    const result = getUserData('', '', '');
    expect(result).toBe(
      'Username: \nAge: \nEmail: '
    );
  });

  test('converts numbers to strings', () => {
    const result = getUserData('Dave', 30, 12345);
    expect(result).toBe(
      'Username: Dave\nAge: 30\nEmail: 12345'
    );
  });

});