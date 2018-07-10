// Your code here.
let loop = (count, testFunc, updateFunc, bodyFunc) => {
  for (let i = count; testFunc(i); i = updateFunc(i)) {
    bodyFunc(i);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);
