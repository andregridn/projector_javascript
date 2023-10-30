'use strict'
let value = +prompt('Введить число:');


if (value) {

    console.log('Використання циклу for:');
    for (let i = 1; i < value; i++) {
        if (!(i % 2)) { console.log(i); };
    };

    console.log('Використання циклу while:');
    let i = 1;
    while (i < value) {
        if (!(i % 2)) { console.log(i); };
        i++;
    };
} else { console.log('Таке чуство шо Бог десь наказує нас за шось'); };


