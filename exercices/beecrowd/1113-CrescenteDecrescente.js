var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim().split(' ');
    let a = parseInt(line[0]);
    let b = parseInt(line[1]);

    if (a === b) break;
    if (a < b) {
        console.log('Crescente');
    } else {
        console.log('Decrescente');
    }
}