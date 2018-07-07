for (let n = 1; n <= 100; n += 1) {
  let output = '';
  if (n % 3 === 0) output += 'Fizz';
  if (n % 5 === 0) output += 'Buzz';
  console.log(output || n);
}
