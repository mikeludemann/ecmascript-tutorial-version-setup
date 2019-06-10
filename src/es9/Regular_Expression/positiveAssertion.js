let no = /(?<=#).*/.test('winner');
let yes = /(?<=#).*/.test('#winner');

let check = '#winner'.match(/(?<=#).*/)[0];

console.log(check);