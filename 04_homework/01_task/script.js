'use strict'

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

initials = []
userNames.sort().map(name => {
    name = name.split(' ');
    let nameInitials = '';
    for (let i = 0; i < name.length; i++){
        nameInitials += `${name[i][0]}.`;
    }
    initials.push(nameInitials)
})

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]