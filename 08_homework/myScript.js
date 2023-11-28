let headerTwo = document.querySelector("#headerTwo");
let firstSection = document.getElementsByTagName('section')[0];
let item5 = Array.from(document.querySelectorAll('li')).filter(li => {
    if (li.innerText === 'Пункт 5') {return li}})[0]

let hatredLevel = document.getElementsByClassName('hatredLevelBlock')[0]

console.log(firstSection)