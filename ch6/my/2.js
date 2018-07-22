class Group {
  // Your code here.
  constructor() {
    this.members = [];
  }

  static from(_collection) {
    let group = new Group();
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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

let group1 = new Group();
group1.add(1);
group1.add(2);
console.log(group1);