export * from "lib/math";
export var e = 2.71828182846;
export default (x) => Math.exp(x);

import exp, { pi, e } from "lib/mathplusplus";

console.log("e^{π} = " + exp(pi));