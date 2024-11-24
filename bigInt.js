console.log(BigInt("12345678901234534789999999"));  // OR 

let bigNo = 12345678901234534789999999n; // the addition of n shows that that is a big number

console.log(typeof bigNo); // bigint

let largeNumber = BigInt(Number.MAX_SAFE_INTEGER);
console.log(largeNumber); // Output: 9007199254740991n

// console.log(largeNumber + 2); // Output: Cannot mix BigInt and other types, use explicit conversions

// solution
console.log(largeNumber + 2n)

