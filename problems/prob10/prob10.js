function randSum(num) {
  let total = 0;
  const numArr = num.toString().split('');
  for (let num of numArr) {
    total += parseInt(num);
  }
  return total;
}

const randomNumber = Math.floor((Math.random() * 100));
console.log(`The number is ${randomNumber}`);
console.log(`The sum of its digits is ${randSum(randomNumber)}`);
