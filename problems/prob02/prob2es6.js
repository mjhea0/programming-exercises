function createList(num) {
  const list = [];
  for (var i = 1; i < num; i++) {
    list.push(Math.floor(Math.random() * 100));
  }
  return list;
}

function calculateAverage(list) {
  let averageValue = 0;
  list.forEach((el) => {
    averageValue += Number(el);
  });
  return Math.round(averageValue / list.length);
}

function calculateVariance(list, average) {
  let varianceValue = 0;
  list.forEach((el) => {
    varianceValue += Number(Math.pow(el - avg, 2));
  });
  return varianceValue / list.length;
}

function calcualteStandardDeviation(variance) {
  const stdDev = Math.sqrt(variance);
  return Math.round(stdDev);
}


const list = createList(10);
console.log(`The numbers are ${list}`);

const avg = calculateAverage(list);
console.log(`The average is ${avg}`);

const variance = calculateVariance(list, avg);
console.log(`The variance is ${variance}`);

const stdDev = calcualteStandardDeviation(variance);
console.log(`The standard dev is ${stdDev}`);
