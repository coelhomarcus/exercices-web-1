var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var renda = parseFloat(lines[0]);
var imposto = 0;

if (renda <= 2000.00) { 
    console.log('Isento');
} 
else if (renda <= 3000.00) {
    imposto = (renda - 2000) * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`);
} 
else if (renda <= 4500.00) {
    imposto = (1000 * 0.08) + (renda - 3000) * 0.18;
    console.log(`R$ ${imposto.toFixed(2)}`);
}
else {
    imposto = (1000 * 0.08) + (1500 * 0.18) + (renda - 4500) * 0.28;
    console.log(`R$ ${imposto.toFixed(2)}`);
}