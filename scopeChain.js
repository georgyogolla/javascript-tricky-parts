// ORDER IN WHICH A VARIABLE IS CHECKED IN DIFFERENT SCOPES.

// 1. Local scope
// 2. Any outer function.
// 3. Global scope


// Example
let x = 10; // if no variable is defined within the local scope and the immediate outer function then it is checked from the global scope.

function outerFunction() {
//   let x = 5;

  function innerFunction() {
    // let x = 2; // This variable is defined in the inner function scope.
    console.log(x); // 5 - if the variable isn't defined in the local scope then it is cheked in the immediate outer function scope.
  }

  innerFunction();
}

outerFunction();
