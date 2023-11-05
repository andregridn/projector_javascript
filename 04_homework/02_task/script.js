'use strict'

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames;

filteredNames = [];
const pattern = /[уеіаоєяию]/i; // створимо набір голосних для перевірки з флагом i

// 1 спосіб
for (let i = 0; i < userNames.length; i++){
    if (pattern.test(userNames[i][0])){
        filteredNames.push(userNames[i]);
    }
}

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// 2 спосіб

filteredNames = userNames.filter(name => pattern.test(name[0]))

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
