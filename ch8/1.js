class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  }
  throw new MultiplicatorUnitFailure('Klunk');
}

function reliableMultiply(a, b) {
  // Your code here.
  for (;;) {
    try {
      const value = primitiveMultiply(a, b);
      return value;
    } catch (e) {
      console.log('');
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64
