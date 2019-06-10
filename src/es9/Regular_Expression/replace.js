let regexp = /(?<firstname>[a-zA-Z]+) (?<lastname>[a-zA-Z]+$)/u;

var fullname = "John Doe";

console.log(fullname.replace(regexp, '$<lastname> $<firstname>'));