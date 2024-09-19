const form = document.querySelector("form");

function calcular(e) {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const operacao = document.getElementById('operacao').value
    let resultado;

    switch(operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "x":
            resultado = num1 * num2;
            break;        
        case "/":
            resultado = num1 / num2;
            break;
    }

    document.getElementById('resultado').textContent = `Resultado da operação: ${resultado}`
}
 
form.addEventListener("submit", calcular)