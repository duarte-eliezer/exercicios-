var prompt = require('prompt-sync')();

let peso = Number(prompt('Informe seu peso:'))
let alt = Number(prompt('Informe a sua altura:'))
let imc = peso / (alt * alt)

let categoria

if ( imc < 18.5 ){
    categoria = 'Abaixo do peso' 
} else if( imc >= 18.5 && imc <= 24.9){
    categoria = 'Peso normal'
} else if( imc >= 25 && imc <= 29.9){
    categoria = 'Sobrepeso'
} else if( imc >= 30 && imc <= 34.9){
    categoria = 'Obesidade grau I'
} else if( imc >= 35 && imc <= 39.9){
    categoria = 'Obesidade grau II'
} else {
    categoria = 'Obesidade grau III'
}

console.log(`O IMC é: ${imc.toFixed(1)}`)
console.log(`Categoria:${categoria}`)