var copy = "©".length;
var copyRegexp = "©".match(/./u)[0].length;

console.log(copy === 1);
console.log(copyRegexp === 1);