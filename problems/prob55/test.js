(function() {

  'use strict';

  const expect = chai.expect;

  // integration

  describe('weirdWords()', () => {
    it('should return a string where every letter in the given string is the next letter in the alphabet', () => {
      const basicTest = weirdWords('a');
      expect(basicTest).to.eql('b');
      const firstTest = weirdWords('What is your name?');
      expect(firstTest).to.eql('Xibu jt zpvs obnf?');
      const secondTest = weirdWords('z');
      expect(secondTest).to.eql('a');
      const thirdTest = weirdWords('Z');
      expect(thirdTest).to.eql('A');
    });

  });

}());
