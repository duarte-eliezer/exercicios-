var prompt = require ('prompt-sync')();

let n1 = Number(prompt('Digite o primeiro number!'));
let n2 = Number(prompt('Digite o second number!'));
let n3 = Number(prompt('Enter o third number!'));

if ((n1 < n2) && (n2 < n3)) {
    console.log("Tá em crescente!!!!");
} else if ((n3 < n2) && (n2 < n1)){
    console.log('Tá em decrescente!!!!')
} else {
    console.log('Tá desordenado!!!!')
}