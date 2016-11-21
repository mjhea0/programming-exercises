function calculatePower(num1, num2) {
	let total = 1;
	for (let i = 0; i < num2; i++) {
		total *= num1;
	}
	return total;
}


const rand1 = Math.floor((Math.random() * 20));
const rand2 = Math.floor((Math.random() * 20));
console.log(`What is ${rand1} to the ${rand2} power?`);
console.log(`Answer: ${calculatePower(rand1, rand2)}`);
