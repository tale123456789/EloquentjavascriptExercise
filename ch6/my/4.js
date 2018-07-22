const map = { one: false, two: true, hasOwnProperty: true };

// Fix this call
// console.log(map.hasOwnProperty('one'));
console.log(map.one);
console.log(Object.prototype.hasOwnProperty.call(map, 'one'));
