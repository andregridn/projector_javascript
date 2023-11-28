'use strict'

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
    let i = delay;
    let timeOut = setTimeout(showTime, 1000)
    function showTime() {
        if (i > 0) {
            console.log(i--);
        } else { console.log('BOOM!'); return }
        timeOut = setTimeout(showTime, 1000)
    }
}