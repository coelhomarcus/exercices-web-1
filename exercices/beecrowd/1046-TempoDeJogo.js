var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var horaInicial = parseInt(lines[0]);
var horaFinal = parseInt(lines[1]);
var duracao = 0;

if (horaFinal === horaInicial) {
    duracao = 24;
}
else if (horaInicial < horaFinal) {
    duracao = horaFinal - horaInicial;
} 
else if (horaInicial > horaFinal) {
    duracao = (24 - horaInicial) + horaFinal;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);