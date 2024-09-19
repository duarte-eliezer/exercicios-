var prompt = require ('prompt-sync')();

let m1 = Number(prompt('Qual o valor das vendas do 1° mês??'))
let m2 = Number(prompt('Qual o valor das vendas do 2° mês??'))
let m3 = Number(prompt('Qual o valor das vendas do 3° mês??'))
let soma = m1 + m2 + m3
let c
if ( soma < 5000 ){
    c = 0
} else if ( soma >= 5000 && soma <= 10000 ) {
    c = soma * 0.5
} else {
     c = soma * 0.10
}

console.log(`A sua comissão é: ${c.toFixed(2)}`)