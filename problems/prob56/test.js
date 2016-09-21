(function() {

  'use strict';

  const expect = chai.expect;

  describe('foo', () => {
    it('should always be followed by bar', () => {
      expect(1 + 1).to.eql(2);
    });
  });

}());
