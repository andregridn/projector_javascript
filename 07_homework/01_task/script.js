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
        } else { return }
    }
    const interval = setInterval(showTime, 1000);
    setTimeout(() => {clearInterval(interval), console.log ('BOOM!')}, 1000 * (delay + 1))
}