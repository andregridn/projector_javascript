"use strict"

/* Завдання 1 */

let a = 4, b = 3;

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mult = (a, b) => a * b;
let div = (a, b) => a / b;
let pow = (a, b) => a ** b;
let sqr = (a) => Math.sqrt(a)

console.log (`Змінні: a = ${a} та b = ${b}`);
console.log (`Додавання: ${add(a,b)}`);
console.log (`Віднімання: ${sub(a,b)}`);
console.log (`Множення: ${mult(a,b)}`);
console.log (`Ділення: ${div(a,b)}`);
console.log (`Зведення в ступінь: ${pow(a,b)}`);
console.log (`Квадратний корень змінної a: ${sqr(a)}`);


console.log("");
/* Завдання 2 */

let something;

something = "2"
console.log(something);

something = +something;
console.log(something);

something = Boolean(something);
console.log(something)
