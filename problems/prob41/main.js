(function() {

  'use strict';

  module.exports = function (arr) {
    return arr.reduce(function(memo, number) {
      return memo ^ number;
    }, 0);
  };

}());




