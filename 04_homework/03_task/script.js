'use strict'

const currentMaxValue = 4589;
let reverseMaxValue;

const reverseNumber = (number) => {
    let newNumberArr = number.toString().split('');
    newNumberArr.reverse().toString();
    newNumberArr = +newNumberArr.reduce((a, b) => a + b)
    return newNumberArr;
}

reverseMaxValue = reverseNumber(currentMaxValue)

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'