class PGroup {
  // Your code here
  constructor(member) {
    this.member = member;
  }

  add(value) {
    if (!this.has(value)) {
      return new PGroup(this.member.concat([value]));
    }
    return this;
  }

  has(value) {
    return this.member.includes(value);
  }

  delete(value) {
    if (this.has(value)) {
      return new PGroup(this.member.filter(v => v !== value));
    }
    return this;
  }
}

PGroup.empty = new PGroup([]);

const a = PGroup.empty.add('a');
const ab = a.add('b');
const b = ab.delete('a');

console.log(b.has('b'));
// → true
console.log(a.has('b'));
// → false
console.log(b.has('a'));
// → false
