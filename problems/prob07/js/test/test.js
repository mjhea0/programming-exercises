var expect = chai.expect;
// var should = chai.should();

// sample!
// describe('Compare Numbers', function() {
//   it('1 should equal 1', function() {
//     expect(1).to.equal(1);
//   });
// });

// edge cases? what else should be tested?

describe('Discount Percentage', function() {
  it('should equal 10 if 100 is the total and 10 is the discount', function() {
    expect(discount(100, 10)).to.equal(10);
  });
  it('should equal 100 if 100 is the total and 100 is the discount', function() {
    expect(discount(100, 100)).to.equal(100);
  });
  it('should equal 0 if 100 is the total and 0 is the discount', function() {
    expect(discount(100, 0)).to.equal(0);
  });
  it('should equal "That discount is not acceptable!" if 100 is the total and 101 is the discount', function() {
    expect(discount(100, 101)).to.equal("That discount is not acceptable!");
  });
  it('should equal "That discount is not acceptable!" if 100 is the total and -1 is the discount', function() {
    expect(discount(100, -1)).to.equal("That discount is not acceptable!");
  });
});
