const num1 = Math.floor((Math.random() * (100)));
const num2 = Math.floor((Math.random() * (100)));

const avg = getMean(num1, num2);
const variance = getVariance(num1, num2, avg);
const stdDev = getStdDev(variance);

console.log(`Numbers: ${num1}, ${num2}`);
console.log(`Mean: ${avg}`);
console.log(`Variance: ${variance}`);
console.log(`Standard Deviation: ${stdDev}`);

function getMean(num1, num2) {
  return (num1 + num2) / 2;
}

function getVariance(num1, num2 , avg) {
  return Math.pow((num1 - avg), 2) + Math.pow((num2 - avg), 2);
}

function getStdDev(variance) {
  return Math.sqrt(variance);
}
