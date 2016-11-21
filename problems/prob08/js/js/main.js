var Discount = function(totalAmount, discountPecentage) {
  this.totalAmount = totalAmount;
  this.discountPecentage = discountPecentage;
};

Discount.prototype.calcDiscount = function() {
  if (this.discountPecentage > 100 || this.discountPecentage < 0) {
    return "That discount is not acceptable!";
  }
  return this.totalAmount * (this.discountPecentage * 0.01);
};

// quick tests!
console.log(new Discount(100, 10).calcDiscount() === 10);
console.log(new Discount(100, 100).calcDiscount() === 100);
console.log(new Discount(100, 0).calcDiscount() === 0);

console.log(
  new Discount(100, 101).calcDiscount() === "That discount is not acceptable!");
console.log(
  new Discount(100, -1).calcDiscount() === "That discount is not acceptable!");
