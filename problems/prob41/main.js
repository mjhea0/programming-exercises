(function() {

  'use strict';

  module.exports = function (arr) {
    return arr.reduce(function(num1, num2) {
      return num1 ^ num2;
    }, 0);
  };

}());

// assumes the array is sorted




