function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero < 1 || numero > 100) {
        alert('Por favor, insira um número válido entre 1 e 100.');
        return;
    }
    
    if (numero === 1) {
        document.getElementById('resultado').textContent = '1 não é considerado primo.';
        return;
    }
    
    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
    
    const resultado = ehPrimo ? 'é primo' : 'não é primo';
    document.getElementById('resultado').textContent = `O número ${numero} ${resultado}.`;
}