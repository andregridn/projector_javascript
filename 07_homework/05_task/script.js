function someFunction(a, b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`)
}

function slower(func, seconds) {
    return function(a,b) {
        console.log('Chill out, you will get you result in 5 seconds')
        setTimeout(() => func(a,b), seconds * 1000)
    }
        
    
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення вповільнення

slowedSomeFunction(2, 7) // викликаєте декоратор

// виведе в консоль "Chill out, you will get you result in 5 seconds
//...через 5 секунд виведе результат роботи 'someFunction'