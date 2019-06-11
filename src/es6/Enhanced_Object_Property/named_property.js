var context = ((text) => { return text });

let obj = {
	foo: "bar",
	[ "my new " + context("property") ]: "yes"
};

console.log(obj);
