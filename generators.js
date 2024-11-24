// Javascript can have generator functions - functions that return a Generator that can be lazily looped over.

function* evens(n){
    while(true){
        yield n;
        n += 2;
    }
}

const evenGen = evens(0);
for(let i = 0; i < 10; i++){
    console.log(evenGen.next().value);    
}

// example 2
function* myCats(){
    yield "Persian";
    yield "Siamese";
    yield "Maine Coon";
};

const catGen = myCats();
console.log(catGen.next().value); // Persian
console.log(catGen.next().value); // Siamese
console.log(catGen.next().value); // Maine Coon


// Generate fibonacci sequence with generator function
function* fibonacci(){
    let a = 0;
    b = 1;
    while(true){
        yield a;
        [a, b] = [b, a + b];
    }
}
const fibGen = fibonacci();

for(let i = 0; i < 20; i++){
    console.log(fibGen.next().value);    
};

// COMMON WAY OF USING GENERATORS
// Generate 1000  urls in a batch of 10
const imgUrls = Array.from({length: 1000}, (_, i) => `https://locationimg.com/100/20/any?image=${i}&`);

function* getBatchOfImages(images, batchSize = 10){
    let currIndex = 0;
    while(currIndex < images.length){
        yield images.slice(currIndex, currIndex + batchSize);
        currIndex += batchSize;
    }
}

const batchGen = getBatchOfImages(imgUrls);

for(let batch of batchGen){
    console.log(batch);
}