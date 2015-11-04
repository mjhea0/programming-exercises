// thanks https://github.com/bwreid!

function findSwitchableNumber (numArr, lastNum) {
  for ( var i = (numArr.length - 1); i > 0; i-- ) {
    if ( parseInt(lastNum[1]) > parseInt(numArr[i-1]) ) {
      return [i-1,numArr[i-1]];
    }
  }
}

function sortRemainingNumbers ( numArr, switchLeftIndex ) {
  var leftSide = numArr.splice(switchLeftIndex + 1);
  return numArr.concat( leftSide.sort() ).join('');
}

function nextNum (numStr) {
  numArr = numStr.split('');

  var lastIndex = numArr.length - 1;
  var lastNum = [lastIndex, numArr[lastIndex]];
  var switchLeft = findSwitchableNumber ( numArr, lastNum );

  if ( !switchLeft ) { return 'Not Possible.'; }

  numArr[switchLeft[0]] = lastNum[1];
  numArr[lastNum[0]] = switchLeft[1];

  return sortRemainingNumbers(numArr, switchLeft[0]);
}

console.log('------------------------------');
console.log('Input into nextNum: ', '12345');
console.log('The result: ', nextNum('12345'));
console.log('The answer should be: ', '12354');
console.log('------------------------------');
console.log('Input into nextNum: ', '54321');
console.log('The result: ', nextNum('54321'));
console.log('The answer should be: ', 'Should not be possible');
console.log('------------------------------');
console.log('Input into nextNum: ', '981543');
console.log('The result: ', nextNum('981543'));
console.log('The answer should be: ', '983145');
console.log('------------------------------');
console.log('Input into nextNum: ', '4011122');
console.log('The result: ', nextNum('4011122'));
console.log('The answer should be: ', '4011212');
console.log('------------------------------');
console.log('Input into nextNum: ', '122222222222222');
console.log('The result: ', nextNum('122222222222222'));
console.log('The answer should be: ', '222222222222222');
console.log('———————————————');
