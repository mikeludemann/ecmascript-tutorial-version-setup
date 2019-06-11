let target = {
	greet: "Welcome, John Doe"
};

let proxy = new Proxy(target, {
	get (receiver, name) {
		return name in receiver ? receiver[name] : `Hello, ${name}`;
	}
});

console.log(proxy.greet === "Welcome, John Doe");
console.log(proxy.world === "Hello, world");
