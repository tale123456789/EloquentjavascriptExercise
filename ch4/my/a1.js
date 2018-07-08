// Your code here.
const range = (start, end, step = 1) => {
  const rtnArr = [];
  if (step >= 1) {
    for (let i = start; i <= end; i += step) {
      rtnArr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      rtnArr.push(i);
    }
  }
  return rtnArr;
};

const sum = (arr) => {
  let sumArr = Number(0);
  for (let i = 0; i < arr.length; i += 1) {
    sumArr += Number(arr[i]);
  }
  return sumArr;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
console.log(sum(range(10, 1)));
