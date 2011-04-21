function generateList(num){
  var greaterThan = [];
  var lessThan = [];
  if (num > 40) {
    for (var i = 40; i <= num; i++) {
      if (i % 2 !== 0){
        greaterThan.push(i);
      }
    }
    return greaterThan.reverse();
  } else {
    for (var j = num; j < 40; j++) {
      if (j % 2 !== 0) {
        lessThan.push(j);
      }
    }
    return lessThan.reverse();
  }
}

var num = (Math.floor((Math.random() * 100)));
console.log("The number is " + num);
console.log(generateList(num));