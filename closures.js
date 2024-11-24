// A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any variables that were in-scope at the time the closure was created.


const makeCounter = function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  };
  
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  
  console.log(counter1.value()); // 0.
  
  counter1.increment();
  counter1.increment();
  console.log(counter1.value()); // 2.
  
  counter1.decrement();
  console.log(counter1.value()); // 1.
  console.log(counter2.value()); // 0.

//   Each closure references a different version of the privateCounter variable through its own closure. Each time one of the counters is called, its lexical environment changes by changing the value of this variable. Changes to the variable value in one closure don't affect the value in the other closure.

// global scope
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20

// In the example above, there's a series of nested functions, all of which have access to the outer functions' scope. In this context, we can say that closures have access to all outer scopes.


function idGenerator(){
    let initialId = 0;
    return function(){
        return initialId++;
    }
}
const nextId = idGenerator();
console.log(nextId()); // 0
console.log(nextId()); // 1
console.log(nextId()); // 2


function counter(){
    let count = 0;
    return {
        increment(){
            count++;
        },
        decrement(){
            count--;
        },
        getCount(){
            return count;
        }
    }
}

const counterInstance = counter();
counterInstance.increment();
counterInstance.increment();
counterInstance.decrement();
console.log(counterInstance.getCount()); // 1

// exponent function
function createExponent(exponent){
    return function(val){
        return val ** exponent;
    }
}
const square = createExponent(2);
const cube = createExponent(3);
console.log(square(4)); // 16
console.log(cube(4)); // 64

// generate unique book and user id's
function getBookAnsUserId(prefix){
    let id = 0;
    return function(){
        id += 1;
        return `${prefix}-${id}`
    }
}

const bookIdGenerator = getBookAnsUserId("book");
const userIdGenerator = getBookAnsUserId("user");

console.log(bookIdGenerator()); // book_1
console.log(bookIdGenerator()); // book_2

// using closures with loops
for(let i = 0; i < 8; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000 * i)
}