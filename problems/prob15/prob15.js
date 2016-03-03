/*
Write a function that takes a single number as an input and returns that many lines.
On the first line there is one '#' character.
On the second there are two. And so on.
This will create a nice triangle.
*/


function createTriangle(num) {
  var line = '';
  var i = 0;
  while (i < num) {
    line += "#";
    console.log(line);
    i++;
  }
}

console.log(createTriangle(10));