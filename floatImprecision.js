// Javascript represent numbers as floating point, like 1.234.
// sometimes, thus leads to mildly imprecise results:
console.log(0.1 + 0.2); // Outputs: 0.30000000000000004

// To avoid this, we can use a helper method:

function areFloatsEqual(a, b, epsilon = 1e-10){
    return Math.abs(a -b) < epsilon;
}

console.log(areFloatsEqual(0.1 + 0.2, 0.3)); // Outputs: true