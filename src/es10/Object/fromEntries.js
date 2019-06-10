var obj = {
  firstname: "John",
  lastname: "Doe",
  age: 21
}

var entries = Object.entries(obj);
var fromEntries = Object.fromEntries(entries);

console.log(fromEntries);

// --------------------------------------------

var entries = new Map([
  ["firstname", "John"],
  ["lastname", "Doe"],
  ["age", 21]
]);

var fromEntries = Object.fromEntries(entries);

console.log(fromEntries);