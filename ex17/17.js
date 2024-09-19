var prompt = require('prompt-sync')();

let s = prompt('As notas são de 0 a 100!');
let n1 = Number(prompt('Primeira nota:'));
let n2 = Number(prompt('Segunda nota:'));
let n3 = Number(prompt('Terceira nota:'));

let soma = n1 + n2 + n3 
let media = soma / 3

if ( media < 60 ){
    console.log(`A sua media é: ${media.toFixed(1)} você reprovou!`)
} else if ( media >= 60 ) {
    console.log(`A sua media é: ${media.toFixed(1)} você está aprovado!`)
} else if ( media >= 70 && media < 85 ){
    console.log(`A sua media é: ${media.toFixed(1)} você está aprovado e ganhou uma bonificação de +3 pontos!`)
} else {
    console.log(`A sua media é: ${media.toFixed(1)} Parabéns, você aprovou e ganhou +5 pontos! `)
}