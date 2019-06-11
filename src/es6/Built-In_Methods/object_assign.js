var main = { id: 0 };
var firstArr = { name: "John", age: 24 };
var secondArr = { weight: "200 Pounds", size: "6,4 Feets" };

Object.assign(main, firstArr, secondArr);

main.id === 0;
main.name === "John";
main.age === 24;
main.weight === "200 Pounds";
main.size === "6,4 Feets";