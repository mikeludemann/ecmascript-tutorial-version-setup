var person = {
	firstName: "John",
	lastName : "Doe",
	language : "EN",
	get lang() {
		return this.language;
	},
	set lang(value) {
		this.language = value;
	}
};

var x = Object.getOwnPropertyDescriptor(person, "lang");

console.log(x);

// -----------------------------------------------------

var person = {
	firstName: "John",
	lastName : "Doe",
	language : "EN",
	get lang() {
		return this.language;
	},
	set lang(value) {
		this.language = value;
	}
};

const newPerson = Object.assign({}, person);

var x = Object.getOwnPropertyDescriptor(newPerson, "lang");

console.log(x);