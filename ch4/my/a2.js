// Your code here.
const reverseArray = (arr) => {
  let rtnArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    rtnArray.unshift(arr[i]);
  }
  return rtnArray;
};

const reverseArrayInPlace = (arr) => {
  let temp = null;
  for (let i = 0; i < Math.floor(arr.length); i += 1) {
    temp = arr[i];
    arr[i] = arr[arr.length - (i + 1)];
    arr[arr.length - (i + 1)] = temp;
  }
};


console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
