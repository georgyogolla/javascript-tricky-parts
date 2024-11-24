let x = 5;
let y = ++x; // add 1 to x then evaluate: y and x are both 6
console.log(x);//6
console.log(y);//6 - value of x is incremented before it is used here



let a = 5;
let b = a++; // evaluate a then add 1 to a: b is 5 and a is 6;
console.log(a);//6
console.log(b);//5


// example ina simple class
class Counter{
    constructor()
    {
        this.initial = 1;
    }
    increment(){
        return this.initial++;
    }
}

const counts = new Counter();
console.log(counts.increment());
console.log(counts.increment());
console.log(counts.increment());


