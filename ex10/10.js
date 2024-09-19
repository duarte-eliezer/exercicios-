function verificarParImpar() {
    const numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero)) {
        alert('Por favor, insira um número inteiro válido.');
        return;
    }
    
    const resultado = numero % 2 === 0 ? 'par' : 'ímpar';
    document.getElementById('resultado').textContent = `O número ${numero} é ${resultado}.`;
}