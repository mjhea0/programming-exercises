var randPrint = function (randomNumber){
  var list = [];
  for (var i = 0; i <= randomNumber; i++) {
    if (i % 2 === 0){
      list.push(i);
    }
  }
  return list;
};

var randomNumber = (Math.floor((Math.random() * 100)));
console.log("The number is " + randomNumber);
console.log(randPrint(randomNumber));

