var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salary = parseFloat(lines[1]);
var sales = parseFloat(lines[2]);
var bonus = sales * 0.15;
var total = salary + bonus;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);