"use strict";

const sampleArray = [1, 2, 3];
console.log(sampleArray);

console.log(sampleArray.reduce(myFunc, 10));
function myFunc(total, num) {
  console.log(total);
  return total + num;
}
