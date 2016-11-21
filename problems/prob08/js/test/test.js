var expect = chai.expect;

describe('Discount Percentage', function() {
  it('should equal 10 if 100 is the total and 10 is the discount', function() {
    expect(new Discount(100, 10).calcDiscount()).to.equal(10);
  });
  it('should equal 100 if 100 is the total and 100 is the discount', function() {
    expect(new Discount(100, 100).calcDiscount()).to.equal(100);
  });
  it('should equal 0 if 100 is the total and 0 is the discount', function() {
    expect(new Discount(100, 0).calcDiscount()).to.equal(0);
  });
  it('should equal "That discount is not acceptable!" if 100 is the total and 101 is the discount', function() {
    expect(new Discount(100, 101).calcDiscount()).to.equal(
      "That discount is not acceptable!");
  });
  it('should equal "That discount is not acceptable!" if 100 is the total and -1 is the discount', function() {
    expect(new Discount(100, -1).calcDiscount()).to.equal(
      "That discount is not acceptable!");
  });
});
