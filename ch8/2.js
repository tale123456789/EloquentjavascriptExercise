const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  },
};

function withBoxUnlocked(body) {
  // Your code here.
  const locked = box.locked;
  // console.log(locked);
  if (!locked) {
    return body();
  }
  // console.log('x');
  box.unlock();
  try {
    // console.log('1'+locked);
    return body();
  } finally {
    box.lock();
    // console.log('2'+locked);
  }
}

withBoxUnlocked(() => {
  box.content.push('gold piece');
});

try {
  withBoxUnlocked(() => {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log('Error raised:', e);
}
console.log(box.locked);
// → true
