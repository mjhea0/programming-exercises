function countZeros(array) {
	var count = 0;
	for (var i = 0; i < array.length; i++) {
		array[i] === 0 ? count++ : null;
	}
	return count;
}

console.log(countZeros([0,1,0,2,3]))
console.log(countZeros([0,1,0,0,0]))
console.log(countZeros([0]))


//** refactor with a helper function */

function countZerosHelper(array) {
	var count = 0;
	for (var i = 0; i < array.length; i++) {
		hasZeros(array[i]) === true ? count++ : null;
	}
	return count;
}

function hasZeros(integer){
	integer === 0 ? true : false;
}

console.log(countZerosHelper([0,1,0,2,3]))
console.log(countZerosHelper([0,1,0,0,0]))
console.log(countZerosHelper([0]))