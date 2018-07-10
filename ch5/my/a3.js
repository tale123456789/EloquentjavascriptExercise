const every = (array, test) => {
// function every(array, test) {
  // Your code here.
  let pass = true;
  for (const ele of array) {
    if (!test(ele)) {
      pass = false;
    }
  }
  return pass;
};

const testFunc = ele => !(ele < 10);

//const every2 = (array, test) => !array.some(ele => !test(ele));
const every2 = (array, test) => !array.some(testFunc);

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
console.log('=======');
console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
console.log('=======');
console.log(![1, 3, 5].some(testFunc));
console.log(![2, 4, 16].some(testFunc));
console.log(![].some(testFunc));
