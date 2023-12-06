'use strict'

const body = document.querySelector('body');
const button = document.querySelector('.button');
const log = document.querySelector('.log');

// initialize localStorage theme if it's empty
if (localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', 'dark-theme');
}

// Toggle the classlist of body to change custom properties
const theme = localStorage.getItem('theme');
if (theme === 'light-theme') {
    body.classList.toggle('light-theme');
}


// Button text and log
button.innerText = body.classList.contains('light-theme') ? 'Turn off' : 'Turn on';

// If logs exist in LocalStorage, show it or log the time previous mode was set.
logTime();

button.addEventListener('click', lightSwitch);

// Changing theme and logging time of change mode
function lightSwitch() {
    body.classList.toggle('light-theme');
    localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme');
    button.innerText = body.classList.contains('light-theme') ? 'Turn off' : 'Turn on';
    logTime();
}

function logTime() {
    const time = new Date(Date.now());

    // if value length smaller than 2, add 0 before
    const twoFigure = value => value.toString().length < 2 ? 0 + value.toString() : value.toString();

    const day = twoFigure(time.getDate());
    const month = twoFigure(time.getMonth());
    const year = time.getFullYear().toString();
    const hour = twoFigure(time.getHours());
    const minute = twoFigure(time.getMinutes());
    const second = twoFigure(time.getSeconds());
    const formattedTime = `${day}-${month}-${year} ${hour}:${minute}:${second}`;

    const lastPressOn = localStorage.getItem('lastPressOn');
    const lastPressOff = localStorage.getItem('lastPressOff');

    if (body.classList.contains('light-theme')) {
        localStorage.setItem('lastPressOff', formattedTime);
        log.innerText = lastPressOn ? `Last turn on: ${lastPressOn}` : '';
    } else {
        localStorage.setItem('lastPressOn', formattedTime);
        log.innerText = lastPressOff ? `Last turn off: ${lastPressOff}` : ''
    }
}
