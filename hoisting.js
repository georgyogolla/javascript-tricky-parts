// Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

console.log(food);// returns undefined
var food = "Apple";

// Below is what happens to the above code

var food; // variable declaration is moved(hoisted) to the top of the scope 
console.log(food); // returns undefined
food = "Apple";

// Example of var declarations in functions
function displayFood() {
    console.log(food); // returns undefined
    var food = "Banana";
    console.log(food); // returns Banana

    // reason for undefined
    // When a function is called, the interpreter creates a new execution context and allocates memory for variables, function declarations, and parameters.
    // Inside the function, the variable declarations and function declarations are hoisted, but the initialization of variables (like setting them to undefined) is not.
    // So, when we try to access the variable before it's been initialized, the interpreter returns undefined.

    var food; // variable declaration is moved(hoisted) to the top of the scope
    console.log(food);
    food = "Banana";// food is later assigned a value.
    
}

// let declarations in functions

function soccerTeam(){
    let team;
    // TEMPORAL DEAD ZONE STARTS
    console.log(team);
    // ReferenceError: Cannot access 'team' before initialization
    let team = "Manchester United";
    // TEMPORAL DEAD ZONE ENDS   
}

