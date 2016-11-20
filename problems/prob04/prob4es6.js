function randPrint(randNum) {
  const list = [];
  for (let i = 0; i <= randomNumber; i++) {
    if (i % 2 === 0){
      list.push(i);
    }
  }
  return list;
}

const randomNumber = (Math.floor((Math.random() * 100)));
console.log(`The number is - ${randomNumber}`);
console.log(randPrint(randomNumber));
