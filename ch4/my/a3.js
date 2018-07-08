// Your code here.
const arrayToList = (arr) => {
  let list = null;
  let current = null;
  for (let i = 0; i < arr.length; i += 1) {
    if (list == null) {
      list = { value: arr[i], rest: null };
      current = list;
    } else {
      current.rest = { value: arr[i], rest: null };
      current = current.rest;
    }
  }
  return list;
};

const listToArray = (list) => {
  const array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

const prepend = (value, list) => ({ value, rest: list });

const nth = (list, pos) => {
  if (!list) return undefined;
  if (pos === 0) return list.value;
  return nth(list.rest, pos - 1);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
