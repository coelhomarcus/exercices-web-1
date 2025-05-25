// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = "5 4\n7 2\n3 8\n2 2";
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    let a = parseInt(lines[i][0]);
    let b = parseInt(lines[i][2]);

    if (a === b) break;
    if (a < b) {
        console.log('Crescente');
    } else {
        console.log('Decrescente');
    }
}