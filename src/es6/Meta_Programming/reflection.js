let obj = { 
  a: 1 
};

Object.defineProperty(obj, "b", { value: 2 });

obj[Symbol("c")] = 3;

let reflection = Reflect.ownKeys(obj);

console.log(reflection);