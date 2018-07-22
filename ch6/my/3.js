class Group {
  // Your code here.
  constructor() {
    this.members = [];
  }

  static from(_collection) {
    const group = new Group();
    for (const value of _collection) {
      group.add(value);
    }
    return group;
  }

  add(_value) {
    if (!this.has(_value)) {
      this.members.push(_value);
    }
  }

  delete(_value) {
    this.members = this.members.filter(word => word !== _value);
  }

  has(_value) {
    return this.members.includes(_value);
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    }
    const result = {
      value: this.group.members[this.position],
      done: false,
    };
    this.position += 1;
    return result;
  }
}
// Your code here (and the code from the previous exercise)

for (const value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c
