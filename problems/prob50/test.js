var expect = chai.expect;

describe('checkRamp()', function() {
  it('checkRamp(1234) should return true', function() {
    expect(checkRamp(1234)).to.equal(true);
  });
  it('checkRamp(1032) should return true', function() {
    expect(checkRamp(1032)).to.equal(false);
  });
  it('checkRamp(1124) should return true', function() {
    expect(checkRamp(1124)).to.equal(true);
  });
});