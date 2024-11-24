// Create a function parseAndCheck that takes an array of values.

// The function should return a new array with all values parsed to a number using parseFloat .

// If the parsing results in a NaN, throw an error with the message "Invalid Number"


function parseAndCheck(arr){
    if(!Array.isArray(arr)){
        throw new Error('Not an array')
    }
    
    return arr.map(a => {
        const parsedEl = parseFloat(arr);
        if(isNaN(parsedEl)){
            throw new Error('Invalid Number')
        }
        
        return parsedEl;
    })
}

const nums = ["a", 2.34, 2, 5.64, 10];
const results = parseAndCheck(nums);
console.log(results);