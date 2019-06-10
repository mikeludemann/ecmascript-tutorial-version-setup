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
