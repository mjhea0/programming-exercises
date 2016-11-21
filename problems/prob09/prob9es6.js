function generateRandom(num) {
	const randNums = [];
	for (let i = 0; i <= num; i++) {
		randNums.push(Math.floor((Math.random() * 100)));
	}
	return randNums.sort();
}

console.log(generateRandom(10));
console.log(generateRandom(20));
console.log(generateRandom(5));
