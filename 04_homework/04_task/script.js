'use strict'

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

const multiplyArray = arr => {

    let result = arr.flat(Infinity).reduce((a, b) => a * b);

    return result;
}

productOfArray = multiplyArray(resultsArray);

console.log(productOfArray); // 24