function generateList(num) {
  const list = [];
  let counter = 40;
  let upperRange = num + 1;
  if (num <= 40) {
    counter = num;
    upperRange = 40;
  }
  for (let i = counter; i < upperRange; i++) {
    if (i % 2 !== 0) list.push(i);
  }
  return list.reverse();
}

const num = (Math.floor((Math.random() * 100)));
console.log(`The number is ${num}`);
console.log(generateList(num));
