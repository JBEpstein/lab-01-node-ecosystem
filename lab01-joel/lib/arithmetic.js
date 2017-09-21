'use strict';

const arithmetic = module.exports = {};

arithmetic.add = function(num1, num2) {
  if (typeof(num1) == 'number' && typeof(num2) == 'number') {
    return num1 + num2;
  } else {
    return null;
  }
};

arithmetic.subtract = function(num1, num2) {
  if (typeof(num1) == 'number' && typeof(num2) == 'number') {
    return num1 - num2;
  } else {
    return null;
  }
};