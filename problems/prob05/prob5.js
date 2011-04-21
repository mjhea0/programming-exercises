function generateList(randNum) {
  list = [];
  if (randNum > 40) {
    for (var i = 40; i <= randNum; i++) {
      if (i % 2 !== 0){
        list.push(i);
      }
    }
  } else {
    for (var j = 0; j < 40; j++) {
      if (j % 2 !== 0) {
        list.push(j);
      }
    }
  }
  return list;
}

var randNum = (Math.floor((Math.random() * 100)));
console.log('The number is ' + randNum);
console.log(generateList(randNum));