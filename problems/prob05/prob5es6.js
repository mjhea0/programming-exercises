function generateList(randNum) {
  const list = [];
  let counter = 0;
  let upperRange = 40;
  if (randNum > 40) {
    counter = 40;
    upperRange = randNum;
  }
  for (let i = counter; i < upperRange; i++) {
    if (i % 2 !== 0) list.push(i);
  }
  return list;
}

const randNum = (Math.floor((Math.random() * 100)));
console.log(`The number is ${randNum}`);
console.log(generateList(randNum));
