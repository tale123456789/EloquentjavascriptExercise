function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, 'B');
}

console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
