var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

const N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
    const T = parseInt(lines[i]);
    const ano = 2015 - T;

    if (ano > 0) {
        console.log(`${ano} D.C.`);
    } else {
        console.log(`${Math.abs(ano) + 1} A.C.`);
    }
}