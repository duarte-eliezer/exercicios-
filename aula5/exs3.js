var prompt = require('prompt-sync')();

// EX1

// let produtos = [
//     { nome: 'Produto 1', preco: 120, categoria: 'eletrônico' },
//     { nome: 'Produto 2', preco: 80, categoria: 'móveis' },
//     { nome: 'Produto 3', preco: 150, categoria: 'eletrônico' }
//   ];
  
//   let produtosCaros = produtos.filter(produto => produto.preco > 100);
//   console.log(produtosCaros);  
  
// EX2

// let pessoas = [
//     { nome: 'Ana', idade: 25, profissao: 'Engenheira' },
//     { nome: 'Carlos', idade: 30, profissao: 'Médico' },
//     { nome: 'João', idade: 35, profissao: 'Professor' }
//   ];
  
//   let mediaIdade = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0) / pessoas.length;
//   console.log(mediaIdade);  
  
// EX3

// let produtos = [
//     { nome: 'Produto 1', preco: 120 },
//     { nome: 'Produto 2', preco: 80 },
//     { nome: 'Produto 3', preco: 150 }
//   ];
  
//   let produtosComDesconto = produtos.map(produto => {
//     return {
//       nome: produto.nome,
//       preco: produto.preco * 0.9  // Aplicando o desconto de 10%
//     };
//   });
  
//   console.log(produtosComDesconto);  
//   // Saída esperada: [{ nome: 'Produto 1', preco: 108 }, { nome: 'Produto 2', preco: 72 }, { nome: 'Produto 3', preco: 135 }]
  
  
// EX4

// let produtos = [
//     { nome: 'Produto 1', preco: 120, categoria: 'eletrônico' },
//     { nome: 'Produto 2', preco: 80, categoria: 'móveis' },
//     { nome: 'Produto 3', preco: 150, categoria: 'eletrônico' },
//     { nome: 'Produto 4', preco: 50, categoria: 'móveis' }
//   ];
  
//   let contagemCategorias = produtos.reduce((acc, produto) => {
//     // Se a categoria já existe no acumulador, incrementa, senão, inicializa com 1
//     acc[produto.categoria] = (acc[produto.categoria] || 0) + 1;
//     return acc;
//   }, {});
  
//   console.log(contagemCategorias);  
//   // Saída esperada: { 'eletrônico': 2, 'móveis': 2 }
  

// EX5

// let nomes = ['Ana', 'João', 'Pedro'];

// let nomesObj = nomes.reduce((acc, nome) => {
//   acc[nome] = nome.length;
//   return acc;
// }, {});
// console.log(nomesObj);  

// EX6

// let produtos = [
//     { nome: 'Produto 1', preco: 120 },
//     { nome: 'Produto 2', preco: 80 },
//     { nome: 'Produto 3', preco: 150 }
//   ];
  
//   let totalPrecos = produtos.reduce((acc, produto) => acc + produto.preco, 0);
  
//   console.log(totalPrecos);  // Saída esperada: 350
  
// EX7

// let alunos = [
//     { nome: 'Alice', nota: 9 },
//     { nome: 'Bob', nota: 6 },
//     { nome: 'Clara', nota: 8 }
//   ];
  
//   let aprovados = alunos.filter(aluno => aluno.nota > 7);
//   console.log(aprovados);  
  
// EX8

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6]
//   ];
  
//   let matrizMultiplicada = matriz.map(linha => linha.map(num => num * 2));
//   console.log(matrizMultiplicada);  
  
// EX9

// let listas = [
//     ['Ana', 'Pedro'],
//     ['João', 'Maria'],
//     ['Carlos', 'Clara']
//   ];
  
//   let listaConcatenada = listas.reduce((acc, lista) => acc.concat(lista), []);
//   console.log(listaConcatenada);  
  
// EX10

// let pessoas = [
//     { nome: 'Ana', idade: 25 },
//     { nome: 'Carlos', idade: 30 },
//     { nome: 'João', idade: 35 }
//   ];
  
//   let pessoaMaisVelha = pessoas.reduce((maisVelha, pessoa) => {
//     return (pessoa.idade > maisVelha.idade) ? pessoa : maisVelha;
//   });
  
//   console.log(pessoaMaisVelha);  
//   // Saída esperada: { nome: 'João', idade: 35 }
  
// EX11

// let produtos = [
//     { nome: 'Produto 1', preco: 120, categoria: 'eletrônico' },
//     { nome: 'Produto 2', preco: 80, categoria: 'móveis' },
//     { nome: 'Produto 3', preco: 150, categoria: 'eletrônico' },
//     { nome: 'Produto 4', preco: 50, categoria: 'móveis' }
//   ];
  
//   function filtrarPorCategoria(produtos, categoriaDesejada) {
//     return produtos.filter(produto => produto.categoria === categoriaDesejada);
//   }
  
//   console.log(filtrarPorCategoria(produtos, 'eletrônico'));  
//   // Saída esperada: [{ nome: 'Produto 1', preco: 120, categoria: 'eletrônico' }, { nome: 'Produto 3', preco: 150, categoria: 'eletrônico' }]
  
// EX12

// let matrizNumeros = [
//     [1, -2, 3],
//     [-4, 5, -6]
//   ];
  
//   let somaPositivos = matrizNumeros.flat().reduce((acc, num) => num > 0 ? acc + num : acc, 0);
//   console.log(somaPositivos);  
  

// EX13

// let pessoas = [
//     { nome: 'Ana', idade: 25 },
//     { nome: 'Carlos', idade: 30 },
//     { nome: 'João', idade: 35 }
//   ];
  
//   let pessoasFormatadas = pessoas.map(pessoa => {
//     return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`;
//   });
  
//   console.log(pessoasFormatadas);  
//   // Saída esperada: ["Nome: Ana, Idade: 25", "Nome: Carlos, Idade: 30", "Nome: João, Idade: 35"]
  

// EX14

//  let produtos = [
//     { nome: 'Produto 1', preco: 120 },
//     { nome: 'Produto 2', preco: 80 },
//     { nome: 'Produto 3', preco: 50 },
//     { nome: 'Produto 4', preco: 30 }
//   ];
  
//   let produtosAgrupados = produtos.reduce((acc, produto) => {
//     if (produto.preco > 50) {
//       acc.acimaDe50.push(produto);
//     } else {
//       acc.abaixoOuIgualA50.push(produto);
//     }
//     return acc;
//   }, { acimaDe50: [], abaixoOuIgualA50: [] });
  
//   console.log(produtosAgrupados);
//   // Saída esperada: 
//   // {
//   //   acimaDe50: [
//   //     { nome: 'Produto 1', preco: 120 },
//   //     { nome: 'Produto 2', preco: 80 }
//   //   ],
//   //   abaixoOuIgualA50: [
//   //     { nome: 'Produto 3', preco: 50 },
//   //     { nome: 'Produto 4', preco: 30 }
//   //   ]
//   // }

// EX15

//  let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   let matrizTransformada = matriz.map(linha => {
//     return linha
//       .filter(numero => numero % 2 === 0)  // Filtrar números pares
//       .map(numero => numero * 3);          // Multiplicar por 3
//   });
  
//   console.log(matrizTransformada);
//   // Saída esperada: [ [ 6 ], [ 12, 18 ], [ 24 ] ]
  