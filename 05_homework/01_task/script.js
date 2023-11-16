'use strict';

const durationBetweenDates = (begin = '22 Apr 1995', end = '09 Nov 2023', format = 'days') => {
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    console.log(format);
    let duration;
    if (beginDate < endDate) {
        duration = endDate.getTime() - beginDate.getTime();
    } else { duration = beginDate.getTime() - endDate.getTime(); }

    if (format === 'seconds') {
        console.log(duration / 1000 + ' seconds')
    } else if (format === 'days') {
        console.log((duration / 1000 / 60 / 60 / 24).toFixed(0) + ' days')
    }

};

durationBetweenDates();
durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds');  // поверне '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days');  // поверне '362 days'