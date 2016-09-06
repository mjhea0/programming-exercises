/*

Write a function named `rotateMatrix()` that rectangular array of numbers (a matrix) and returns the matrix rotated 90 degrees to the right.

1. Do you understand the problem?
  - Yes: Talk it out with the interviewer, making sure you understand what is expected
  - No: clarify the problem, ask "what ifs", clarify inputs and outputs, ask for more samples, think of hypotheticals
  - Still no: Try something a bit easier, how do you break this problem down ("I have no idea where to start, but I know how to write a loop - so I am going to start there")
2. Write psuedocode
  - Clarify that you are going in the right direction
3. Write sandwich code
4. Wite code
5. Test - manually test, automate those tests
6. Burn it down, refactor, do it again, test, burn it down, refactor

 */

// brute force
function rotateMatrix(matrix) {
  let newArray = [];
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray = [];
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j]) {
        newArray.unshift(matrix[j][i]);
      }
    }
    result.push(newArray);
  }
  return result;
}

// function rotateMatrix(matrix) {
//   return matrix[0].map((col, i) => {
//     return matrix.map((row, j) => {
//       let neg = matrix.length - (j + 1);
//       return matrix[neg][i];
//     });
//   });
// }

const matrix1 = [
  [44, 23],
  [21, 10],
  [9, 28],
  [85, 16],
  [33, 18]
];

const matrix1Expected = [ [33, 85, 9, 21, 44], [18, 16, 28, 10, 23] ];

console.log(rotateMatrix(matrix1));
console.log('Expected: ', matrix1Expected);

const matrix2 = [
  [29,62,8],
  [12,60, 31],
  [99,79,12]
];

const matrix2Expected = [
  [99, 12, 29],
  [79, 60, 62],
  [12, 31, 8]
];

console.log('\n', rotateMatrix(matrix2));
console.log('Expected: ', matrix2Expected);
