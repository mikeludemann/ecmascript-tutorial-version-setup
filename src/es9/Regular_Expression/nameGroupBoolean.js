let regexp = /(?<eat>salad|meat|milkshake)==\k<eat>/u;

let firstTest = regexp.test('salad==salad');
let secondTest = regexp.test('meat==meat');
let thirdTest = regexp.test('milkshake==milkshake');
let fourthTest = regexp.test('salad==meat');

console.log(firstTest);
console.log(secondTest);
console.log(thirdTest);
console.log(fourthTest);