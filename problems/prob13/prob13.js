/*

Write a function that takes two random integers as arguments and returns the least common multiple.

*/

function lcm(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}

function gcd(num1, num2) {
  return !num2 ? num1 : gcd(num2, num1 % num2);
}

const num1 = Math.floor((Math.random() * 100));
const num2 = Math.floor((Math.random() * 100));
console.log(`The numbers are ${num1} and ${num2}`);
console.log(lcm(num1, num2));
