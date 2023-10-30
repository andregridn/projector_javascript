'use strict'

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { console.log("ЛолКек") }
    else if (i % 3 === 0) { console.log("Лол") }
    else if (i % 5 === 0) { console.log("Кек") }
    else { console.log(i) }
}