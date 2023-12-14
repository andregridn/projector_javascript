'use strict'

class Animal {
    #isHealthy
    constructor(name, color, diet, age, isHealthy = true) {
        this.name = name;
        this.color = color;
        this.diet = diet;
        this.age = age;
        this.#isHealthy = isHealthy;
    }

    describe() {
        this.age = this.getAge ? this.getAge() : this.age;
        console.log(`This is a ${this.name}, it's ${this.color}, ${this.age} years old and ${this.#isHealthy ? 'has a good health' : 'sick'}`)
    }
}

class Pet extends Animal {
    constructor(name, color, diet, isHealthy = true) {
        super(name, color, diet, isHealthy);
    }
    hunt() {
        console.log(`${this.name} is hunting`)
    }
}

class Dog extends Pet {
    #age
    constructor(name, color, diet, age, isHealthy = true) {
        super(name, color, diet, isHealthy);
        this.#age = age;
        this.isHomeless = false;
    }
    sound() {
        console.log('Bark!')
    }
    getAge() {
        return this.#age;
    }
}

class Cat extends Pet {
    #age
    constructor(name, color, diet, age, isHealthy) {
        super(name, color, diet, isHealthy);
        this.#age = age;
        this.hasClaws = true;
    }
    sound() {
        console.log('Meow');
    }
    getAge() {
        return this.#age;
    }
}

class Bird extends Animal {
    #age
    constructor(name, color, diet, age, isHealthy = true, canFly = true) {
        super(name, color, diet, isHealthy)
        this.#age = age
        this.canFly = canFly;
    }
    fly() {
        this.canFly ?
            console.log(`${this.name} flies 🪽`) :
            console.log(`${this.name} can't fly 😒`)
        
    }
    sound() {
        console.log('Tweet')
    }
    getAge() {
        return this.#age;
    }
}

const lion = new Animal('King', 'white', 'meat', 3, false)
lion.describe()

const dog = new Dog('Dick', 'light buff', 'meat', 10);
dog.describe();
dog.hunt();
console.log(dog.diet)

const Birdie = new Bird('Birdie', 'gray', 'worms', '2', true, true)
Birdie.fly()
Birdie.describe()