function createList(num) {
  const list = [];
  for (var i = 1; i < num; i++) {
    list.push(Math.floor(Math.random() * 100));
  }
  return list;
}

function getMax(list) {
  return Math.max.apply(Math, list);
}

function getMin(list) {
  return Math.min.apply(Math, list);
}

const list = createList(20);
console.log(`The numbers are - ${list}`);

const maxNumber = getMax(list);
console.log(`The max number is - ${maxNumber}`);

const minNumber = getMin(list);
console.log(`The min number is - ${minNumber}`);
