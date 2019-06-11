let setter = new Set();

setter.add("good morning").add("goodbye").add("good evening");

setter.size === 2;

setter.has("hello") === true;

for (let key of setter.values()) {

	console.log(key);

}
