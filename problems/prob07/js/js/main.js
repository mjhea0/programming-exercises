/*

Write a function that takes a dollar amount and a discount percentage and returns the total discount amount. Return a warning if the discount amount is greater than 100 or less than 0 percent. Test the results with mocha and chai.

*/


// brute force!
function discount(totalAmount, discountPecentage) {
  if (discountPecentage > 100 || discountPecentage < 0) {
    return "That discount is not acceptable!";
  }
  return totalAmount * (discountPecentage * 0.01);
}

// quick tests!
console.log(discount(100, 10) === 10);
console.log(discount(100, 100) === 100);
console.log(discount(100, 0) === 0);

console.log(discount(100, 101) === "That discount is not acceptable!");
console.log(discount(100, -1) === "That discount is not acceptable!");
