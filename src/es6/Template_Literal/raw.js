var x = String.raw`foo\n${ 42 }bar` === "foo\\n42bar";

console.log(x);