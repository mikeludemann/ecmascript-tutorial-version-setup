Object.defineProperty(obj, property, {
	value: "",
	writable : true,
	enumerable : true,
	configurable : true
});

// ----------------------------------------

var person = {
	firstName: "John",
	lastName : "Doe",
	language : "EN", 
};

Object.defineProperty(person, "language", {
	value: "DE",
	writable : true,
	enumerable : true,
	configurable : true
});
