function verificarVelocidade() {
    const velocidade = parseFloat(document.getElementById('velocidade').value);
    if (isNaN(velocidade) || velocidade < 0) {
        alert('Por favor, insira uma velocidade válida.');
        return;
    }
    
    let resultado;
    if (velocidade <= 80) {
        resultado = "Dentro do limite de velocidade.";
    } else if (velocidade <= 100) {
        resultado = "Acima do limite de velocidade. Multa leve.";
    } else {
        resultado = "Muito acima do limite de velocidade. Multa grave.";
    }
    
    document.getElementById('resultado').textContent = resultado;
}