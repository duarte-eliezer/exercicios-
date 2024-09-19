var prompt = require('prompt-sync')()

// EX1

// for (let i = 0; i < 10; i++) {
    // console.log("Programação!")
// }

// EX2

// let i = 5;
// while (i <= 15 ){
//    console.log(i);
//     i++;
// }

// EX3

//  let i = 1;
//  while (i <= 10 ){
//      console.log(i);
//      i++;
// }

// EX4

// let i = 10;
// while (i > 0 ) {
//     console.log(i);
//     i--;
// }

// EX5

// let resposta 

// do{
// let nota1 = Number(prompt('Digite a primeira nota:'))
// let nota2 = Number(prompt('Digite a segunda nota:'))
// let soma = nota1 + nota2
// let media = soma / 2
// let resultado = media
 
// console.log(`A media é: ${resultado}`)

// resposta =  Number(prompt('Calcular a média de outro aluno? 1. Sim 2. Não'))
// } while (resposta === 1)

// EX6 

// let num1 = parseFloat(prompt('Digite o primeiro número: '))
// let num2 = parseFloat(prompt('Digite o segundo número: '))

// while ( num2 === 0 ){
//     num2= parseFloat(prompt('Digite um número maior que zero: '));
// }

// console.log("A divisão dos números é:" + (num1/num2))

// EX7

// let num1 = parseFloat(prompt('Digite o primeiro número: '))
// let num2 = parseFloat(prompt('Digite o segundo número: '))

// while ( num2 === 0 ){
//     num2= parseFloat(prompt('Valor inválido, digite outro número: '));
// }

// console.log("A divisão dos números é:" + (num1/num2))

// EX8

// for (let i = 100; i <= 200; i += 10 ){
//     console.log(i)
// }

// EX9 

// let num = parseFloat(prompt('Digite um número: '))

// for (let i = 1; i <= num; i++ ){
//           console.log(i)
// }

// EX10

// let soma = 0

// for (let i = 0; i < 10; i++ ){
//     let valor = parseFloat(prompt(`Digite o ${i+1}º valor: `));
//     soma += valor;
// }

// let media = soma / 10
// console.log(`A media  aritmética é: ${media}`)

// EX11

// let alcool = 0;
// let gasolina = 0;
// let diesel = 0;

// while (true) {
//     let codigo = parseInt(prompt("Informe o código do combustível (1. Álcool, 2. Gasolina, 3. Diesel, 4. Fim):"));

//     if (codigo === 1) {
//         alcool++;
//         console.log("Álcool");
//     } else if (codigo === 2) {
//         gasolina++;
//         console.log("Gasolina");
//     } else if (codigo === 3) {
//         diesel++;
//         console.log("Diesel");
//     } else if (codigo === 4) {
//         break; 
//     } else {
//         console.log("Código inválido! Tente novamente.");
//     }
// }

// console.log("MUITO OBRIGADO");
// console.log(`Álcool: ${alcool}`);
// console.log(`Gasolina: ${gasolina}`);
// console.log(`Diesel: ${diesel}`);

// EX12

// while (true) {
//     let valor = parseInt(prompt("Digite um valor inteiro (0 ou negativo para encerrar):"));

//     if (valor <= 0) {
//         break; 
//     }

//     if (valor % 2 === 0) {
//         console.log(`${valor} é PAR.`);
//     } else {
//         console.log(`${valor} é ÍMPAR.`);
//     }
// }

// console.log("Programa encerrado.");

// EX13

// Lê a quantidade de alunos
// let quantidadeAlunos = parseInt(prompt("Informe a quantidade de alunos na turma:"));

// let somaNotas = 0;

// // Lê as notas dos alunos
// for (let i = 1; i <= quantidadeAlunos; i++) {
//     let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));
//     somaNotas += nota; // Adiciona a nota à soma total
// }

// // Calcula a média
// let media = somaNotas / quantidadeAlunos;

// // Mostra a média
// console.log(`A média aritmética das notas é: ${media.toFixed(2)}`);
