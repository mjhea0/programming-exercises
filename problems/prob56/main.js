function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length; i++) {
    for(let j = 1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] === target) {
        return [i , j];
      }
    }
  }
  return false;
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 13));
