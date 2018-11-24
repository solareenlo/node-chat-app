// Jan 1st 1970 00:00:00 am === 0

// let date = new Date();
// console.log(date.getMonth());

let moment = require('moment');

let date = moment();
date.add(1, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('YYYY年MM月DD日(ddd)HH時mm分ss秒'));
console.log(date.format('h:mm a'));
