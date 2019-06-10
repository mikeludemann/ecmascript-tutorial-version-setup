var user = [
	{ name: "John", age: 28 },
	{ name: "Tim", age: 35 },
	{ name: "Joe", age: 32 },
	{ name: "Sophia", age: 25 },
];

var x = user.sort((a,b) => a.age - b.age);

/*

var x = user.sort((a,b) => a.age > b.age);

var x = user.sort((a,b) => a.age < b.age);

*/

console.log(x);