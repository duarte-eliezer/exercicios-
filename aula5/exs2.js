var prompt = require('prompt-sync')();

// EX1

// let vetor1 = [1, 2, 3];
// let resultado1 = vetor1.map(num => num * 2);
// console.log(resultado1);  // [2, 4, 6]

// EX2

// let vetor2 = [5, 1, 4, 2, 3];
// vetor2.sort((a, b) => a - b);
// console.log(vetor2);  // [1, 2, 3, 4, 5]

// EX3

// let vetor3 = [10, 20, 30, 5, 50];
// let maiorNumero = Math.max(...vetor3);
// console.log(maiorNumero);  // 50

// EX4 

// let vetor4 = [1, 2, 3, 4, 5, 6];
// let pares = vetor4.filter(num => num % 2 === 0);
// console.log(pares);  // [2, 4, 6]

// EX5

// let vetor5 = [1, 2, 3, 4, 5];
// let invertido = vetor5.reverse();
// console.log(invertido);  // [5, 4, 3, 2, 1]

// EX6

// function maiorDoVetor(vetor) {
//     return Math.max(...vetor);
//   }
//   console.log(maiorDoVetor([5, 12, 8, 21, 4]));  // 21
  
// EX7

// function calcularMedia(vetor) {
//     let soma = vetor.reduce((acc, num) => acc + num, 0);
//     return soma / vetor.length;
//   }
//   console.log(calcularMedia([1, 2, 3, 4, 5]));  // 3
  
// EX8

// function elementoPresente(vetor, elemento) {
//     return vetor.includes(elemento);
//   }
//   console.log(elementoPresente([1, 2, 3], 2));  // true
  
// EX9

// let vetor9 = [];
// for (let i = 0; i < 10; i++) {
//   vetor9[i] = i % 2 === 0 ? 'Par' : 'Ímpar';
// }
// console.log(vetor9);  // ['Par', 'Ímpar', 'Par', 'Ímpar', ...]

// EX10

// let nomes = ['Ana', 'João', 'Maria', 'Carlos', 'Lucas'];
// let nomeProcurado = prompt("Digite um nome:");
// if (nomes.includes(nomeProcurado.c)) {
//   console.log("ACHEI");
// } else {
//   console.log("NÃO ACHEI");
// }

// EX11

// let matriz11 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   let somaMatriz11 = matriz11.flat().reduce((acc, num) => acc + num, 0);
//   console.log(somaMatriz11);  // 45
  
// EX12

// let matriz12 = [
//     [1, 20, 3],
//     [15, 6, 8]
//   ];
//   let maiorMatriz12 = Math.max(...matriz12.flat());
//   console.log(maiorMatriz12);  // 20
  
// EX13 

// let matriz13 = [
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
//   ];
//   console.log(matriz13);
  
// EX14

// let matriz14 = [
//     [0, 0, 1],
//     [0, 1, 0],
//     [1, 0, 0]
//   ];
//   console.log(matriz14);
  
// EX15

// let matriz15 = [
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
//   ];
//   console.log(matriz15);
  