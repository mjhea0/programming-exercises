(function() {

  'use strict';

  var expect = chai.expect;

  describe('combineAndSort()', function() {

    var array1 = ['cat', 'dog', 'fish', 'zebra'];
    var array2 = ['lion', 'aardvark', 'gorilla'];
    var combined = ['aardvark', 'cat', 'dog', 'fish', 'gorilla', 'lion', 'zebra'];

    it('combineAndSort(array1, array2) should return a new array with all items in alphabetical order', function() {
      expect(combineAndSort(array1, array2)).to.eql(combined);
    });

    it('combineAndSort(array1, array2) should be non-destructive', function() {
      combineAndSort(array1, array2);
      expect(array1).to.eql(['cat', 'dog', 'fish', 'zebra']);
      expect(array2).to.eql(['lion', 'aardvark', 'gorilla']);

    });

  });

}());
