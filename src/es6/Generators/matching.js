let fibonacci = function* (numbers) {
	let previous = 0, currrent = 1;
	while (numbers-- > 0) {
		[ previous, currrent ] = [ currrent, previous + currrent ];
		yield currrent;
	}
};

for (let n of fibonacci(1000)){

	console.log(n);

}

/*

let numbers = [ ...fibonacci(1000) ];

let [ n1, n2, n3, ...others ] = fibonacci(1000);

*/
