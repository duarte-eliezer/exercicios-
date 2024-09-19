const taxas = {
    USD: 0.20, // 1 BRL = 0.20 USD (exemplo)
    EUR: 0.18  // 1 BRL = 0.18 EUR (exemplo)
};

function converter() {
    const valorReal = parseFloat(document.getElementById('valorReal').value);
    const moedaDestino = document.getElementById('moedaDestino').value;
    const taxa = taxas[moedaDestino];

    if (isNaN(valorReal)) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    const valorConvertido = valorReal * taxa;
    document.getElementById('resultado').textContent = 
        `${valorReal.toFixed(2)} BRL = ${valorConvertido.toFixed(2)} ${moedaDestino}`;
}