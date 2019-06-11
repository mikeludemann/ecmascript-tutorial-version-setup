let map = new Map();

let symbol = Symbol();

map.set("hello", 42);

map.set(symbol, 34);

map.get(symbol) === 34;

map.size === 2;

for (let [ key, val ] of map.entries()){

	console.log(key + ": " + val);

}
