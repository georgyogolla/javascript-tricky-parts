// NaN value can be tricky in javascript.
// It often comes from:

// Logical math errors, like 0 / 0
// Imaginary numbers, like Math.sqrt(-1)
// Conversion errors, like Number("hello")

// All NaN values are considered unique, so NaN === NaN is false.

// Two ways to check for NaN.

// 1. isNaN(n)
// - Returns true if n is NaN or is a value that cannot be coerced into a number:
console.log(isNaN(0/0));
console.log(isNaN("hello"));

// 2. Number.isNaN(n)
// - Returns true only if n is NaN -  everything else returns false.
console.log(Number.isNaN(0/0));
console.log(Number.isNaN("hello"));



