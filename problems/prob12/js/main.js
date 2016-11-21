/*

Generate two random integers from 0 to 100 and output the smallest number such that each shares a least common denominator (aside for 1). For example, 18 and 6 should return 6, while 9 and 4 should return False. Return False if the two numbers are equal.

*/

function calculate(num1, num2) {
  if (num1 % 7 === 0 && num2 % 7 === 0) {
    return smallerNum(num1, num2);
  }
  else if (num1 % 5 === 0 && num2 % 5 === 0) {
    return smallerNum(num1, num2);
  }
  else if (num1 % 3 === 0 && num2 % 3 === 0) {
    return smallerNum(num1, num2);
  }
  else if (num1 % 2 === 0 && num2 % 2 === 0) {
    return smallerNum(num1, num2);
  }
  else {
    return false;
  }
}

function smallerNum(num1, num2) {
  if (num1 > num2) return num2;
  if (num2 > num1) return num1;
  return false;
}

const num1 = Math.floor((Math.random() * 100));
const num2 = Math.floor((Math.random() * 100));
console.log(`The numbers are ${num1} and ${num2}`);
console.log(calculate(num1, num2));
