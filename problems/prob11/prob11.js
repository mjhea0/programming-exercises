/*

Generate a random number from 1000 to 9999 and output the sum of its digits, repeatedly, dropping the left-most digit after each iteration, until there is only one digit only. For example, if the number is 1049, then the output should be 14, 13, 13, 9.

*/

function getTotal(num) {
  let total = 0;
  const numArr = num.toString().split('');
  for (let num of numArr) {
    total += parseInt(num);
  }
  return total;
}

function dropDigit(num) {
  const numArray = num.toString().split('');
  numArray.reverse().pop();
  return numArray.reverse().join('');
}

function output(num) {
  while (num.toString().length > 0) {
    console.log(getTotal(num));
    return output(dropDigit(num));
  }
}

const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
console.log(`The number is ${randomNumber}`);
output(randomNumber);
