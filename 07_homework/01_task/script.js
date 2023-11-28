'use strict'

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
    let i = delay;
    function showTime() {
        if (i > 0) {
            console.log(i--);
        } else { 
            clearInterval(interval)
            console.log('BOOM')
            return }
    }
    const interval = setInterval(showTime, 1000);
}