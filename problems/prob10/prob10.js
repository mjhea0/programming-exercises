function randSum(num) {
  let total = 0;
  const numArr = num.toString().split('');
  for (let num of numArr) {
    total += parseInt(num);
  }
  return total;
}

const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
console.log(`The number is ${randomNumber}`);
console.log(`The sum of its digits is ${randSum(randomNumber)}`);
