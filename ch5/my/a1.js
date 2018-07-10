const arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

console.log(arrays.reduce((a, b) => a.concat(b)));

// → [1, 2, 3, 4, 5, 6]


function reduce(array, combine, start) {
  let current = start;
  for (const element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4, [5, 6], [7, 8, 9]], (a, b) => a.concat(b), []));
