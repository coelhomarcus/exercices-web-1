var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

for (let i = 0; i < lines.length; i++) {
    let x = parseInt(lines[i]);

    if (x === 0) break;

    if (x % 2 !== 0) {
        x++;
    }

    let soma = 0;
    for (let j = 0; j < 5; j++) {
        soma += x + (j * 2);
    }

    console.log(soma);
}