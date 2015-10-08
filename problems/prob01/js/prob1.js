var num1 = Math.floor((Math.random() * (100)));
var num2 = Math.floor((Math.random() * (100)));

var avg = mean(num1, num2);
var variance = variance(num1, num2, avg);
var stdDev = stdDev(variance);

console.log('Numbers: ' + num1 + ', ' + num2);
console.log('Mean: ' + avg);
console.log('Variance: ' + variance);
console.log('Standard Deviation: ' + stdDev);

function mean(num1, num2) {
  return (num1 + num2) / 2;
}

function variance(num1, num2 , avg) {
  return Math.pow((num1 - avg), 2) + Math.pow((num2 - avg), 2);
}

function stdDev(variance) {
  return Math.sqrt(variance);
}
