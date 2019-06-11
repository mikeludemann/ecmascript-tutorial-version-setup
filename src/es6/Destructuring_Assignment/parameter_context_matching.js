function arrayMatching ([ name, val ]) {

	return name + " " + val;

}

function objectMatchingComplete ({ name: n, val: v }) {

	return n + " " + v;

}

function objectMatching ({ name, val }) {

	return name + " " + val;

}

console.log(arrayMatching([ "John Doe", 42 ]));
console.log(objectMatchingComplete({ name: "John", val: 7 }));
console.log(objectMatching({ name: "Doe", val: 42 }));
