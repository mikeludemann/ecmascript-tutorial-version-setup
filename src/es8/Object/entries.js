var person = {
	firstName: "John",
	lastName : "Doe",
	language : "EN", 
};

for(let [key, value] of Object.entries(person)){
  console.log(`Key: ${key} - Value: ${value}`);
}

// ----------------------------------------------------

var person = {
	firstName: "John",
	lastName : "Doe",
	language : "EN", 
};

var entries = new Map(Object.entries(person));

console.log(entries);