var prompt = require('prompt-sync')();

function classificarQuadrilatero() {
    let l1 = Number(prompt('Digite a medida do primeiro lado:'));
    let a1 = Number(prompt("Digite o ângulo entre o primeiro e o segundo lado:"));
    let l2 = Number(prompt('Digite a medida do segundo lado:'));
    let a2 = Number(prompt("Digite o ângulo entre o segundo e o terceiro lado:"));
    let l3 = Number(prompt('Digite a medida do terceiro lado:'));
    let a3 = Number(prompt("Digite o ângulo entre o terceiro e o quarto lado:"));
    let l4 = Number(prompt('Digite a medida do quarto lado:'));
    let a4 = Number(prompt("Digite o ângulo entre o quarto e o primeiro lado:"));

    const tar = a1 === 90 && a2 === 90 && a3 === 90 && a4 === 90;
    const tli = l1 === l2 && l2 === l3 && l3 === l4;
    const ploi = (l1 === l3 && l2 === l4);

    if (tli && tar) {
        console.log('É um quadrado');
    } else if (ploi &&tar) {
        console.log('É um retângulo');
    } else if (tli && !tar) {
        console.log('É um losango');
    } else if (ploi && !tar) {
        console.log('É um paralelogramo');
    } else {
        console.log('É outro tipo de quadrilátero');
    }
}

classificarQuadrilatero();