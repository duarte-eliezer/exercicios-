var prompt = require('prompt-sync')();

////EX1

// let nu = Number(prompt("Digite um número: "));
// for ( let i = nu - 1; i>= 1 ; i-- ) {
//     nu *= i;
// }
// console.log(`O fatorial desse número é: ${nu}`);
 
////EX2

// for (let i = 1; i <= 4; i++) { 
//     let linha = ''; 
//     for (let j = 1; j <= i; j++) { 
//         linha += '*';
//     }
//     console.log(linha); 
// }

///EX3

// let n = Number(prompt('Digite o número que você precisa saber a tabuada: '));

// for (let i = 0; i <= 10; i++){
//     let r = i * n
//     let linha = r
//     console.log(linha)
// }

///EX4

// let p = prompt('Digite uma palavra: ');
// let q = prompt('Qual letra você quer?');
// p = p.toLocaleLowerCase();
// let cont = 0

// for ( let i = 0; i < p.length; i++){
//     if (p[i] === q){
//         cont++;
//     }
// }

// console.log(`A letra aparece ${q} aparece ${cont} vezes na ${p}`);

///EX5

// let ano;

// do {
//     ano = parseInt(prompt('Digite um ano (0 para sair):'), 10);

//     if (ano !== 0) {
//         if ((ano >= 1930 && (ano - 1930) % 4 === 0) && (ano !== 1942 && ano !== 1946)) {
//             console.log(`${ano} é um ano de Copa do Mundo.`);
//         } else {
//             console.log(`${ano} não é um ano de Copa do Mundo.`);
//         }
//     }

// } while (ano !== 0);

