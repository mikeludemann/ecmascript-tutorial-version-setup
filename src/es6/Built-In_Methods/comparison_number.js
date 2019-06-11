var normal = 0.1 + 0.2;
var mathNormal = Math.abs((0.1 + 0.2) - 0.3);

console.log(normal === 0.3);
console.log(mathNormal < Number.EPSILON);