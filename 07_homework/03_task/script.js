'use strict'
let me = {
    name: 'Andriy',
    city: 'Kyiv',
    gender: 'male',
    age: '28',
    hobby: 'singing',
    work: 'Front-end developer',
    mode: 'active',
    introduce () {
        console.log(`Hello, my name is ${this.name}. I'm ${this.age} old. Currently I live in ${this.city}.`)
    },
    describeCurrentMode () {
        console.log(`I'm no longer staying idle. Now I'm in my ${this.mode} mode.`)
    },
    resolution () {
        console.log(`Next year I'm gonna have my first ${this.work} job and have more ${this.hobby} activities!`)
    }
}

me.introduce()
me.describeCurrentMode()
me.resolution()