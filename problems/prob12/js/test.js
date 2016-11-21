const expect = chai.expect;

describe('Least Common Denominator', () => {
  describe('smallerNum(96, 93)', () => {
    it('should return 93', () => {
      expect(smallerNum(96, 93)).to.equal(93);
    });
  });
  describe('smallerNum(80, 80)', () => {
    it('should return false', () => {
      expect(smallerNum(80, 80)).to.equal(false);
    });
  });
  describe('smallerNum(98, 44)', () => {
    it('should return 44', () => {
      expect(smallerNum(98, 44)).to.equal(44);
    });
  });
  describe('calculate(18, 6)', () => {
    it('should return 6', () => {
      expect(calculate(18, 6)).to.equal(6);
    });
  });
  describe('calculate(80, 80)', () => {
    it('should return false', () => {
      expect(calculate(80, 80)).to.equal(false);
    });
  });
  describe('calculate(9, 4)', () => {
    it('should return false', () => {
      expect(calculate(9, 4)).to.equal(false);
    });
  });
});
