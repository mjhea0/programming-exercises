function createList(num) {
  var i = 0;
  var list = [];
  i = 1;
  while (i <= num) {
    list.push(Math.floor(Math.random() * 100));
    i++;
  }
  return list;
}

function calculateAverage(list) {
  var averageValue = 0;
  var i = 0;
  while (i < list.length) {
    averageValue += Number(list[i]);
    i++;
  }
  return Math.round(averageValue / list.length);
}

function calculateVariance(list, average) {
  var i = 0;
  var varianceValue = 0;
  while (i < list.length) {
    varianceValue += Number(Math.pow(list[i] - avg, 2));
    i++;
  }
  return varianceValue / list.length;
}

function calcualteStandardDeviation(variance) {
  var stdDev = Math.sqrt(variance);
  return Math.round(stdDev);
}


var list = createList(10);
console.log('The numbers are ' + list);

var avg = calculateAverage(list);
console.log('The average is ' + avg);

var variance = calculateVariance(list, avg);
console.log('The variance is ' + variance);

var stdDev = calcualteStandardDeviation(variance);
console.log('The standard dev is ' + stdDev);
