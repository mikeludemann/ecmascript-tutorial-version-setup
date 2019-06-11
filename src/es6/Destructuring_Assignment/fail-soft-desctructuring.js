var list = [ 5, 21 ];
var [ a = 1, b = 2, c = 3, d ] = list;

console.log(a === 5);
console.log(b === 21);
console.log(c === 3);
console.log(d === undefined);