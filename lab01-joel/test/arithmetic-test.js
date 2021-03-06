'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

describe('testing arithmetic', function () {

  it('result should be 4', function () {

    let result = arithmetic.add(2, 2);
    expect(result).toEqual(4);
  });

  it('should be null if non number', function() {

    let result = arithmetic.add('lul', 2);
    expect(result).toEqual(null);
  });
});

describe('subtraction', function () {
  it('should return 8', function () {

    let result = arithmetic.subtract(11, 4);
    expect(result).toEqual(7);
  });

  it('Should be null if non number', function() {

    let result = arithmetic.subtract('lul', 2);
    expect(result).toEqual(null);
  });
});
// Added last null test