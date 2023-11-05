'use strict'

function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2) { sum += i } else { sum += 0 }
    }
    return sum;
};

console.log(iterativeOddSumTo(1))
console.log(iterativeOddSumTo(10))