const taxas = {
    padrao: { base: 10, porKg: 1 },
    expresso: { base: 20, porKg: 1.5 },
    internacional: { base: 50, porKg: 2.5 }
};

function calcularFrete() {
    const peso = parseFloat(document.getElementById('peso').value);
    const modalidade = document.getElementById('modalidade').value;
    const resultadoElement = document.getElementById('resultado');
    
    if (isNaN(peso) || peso <= 0) {
        resultadoElement.textContent = 'Por favor, insira um peso válido.';
        resultadoElement.style.borderLeft = '5px solid #f44336';
        return;
    }
    
    const { base, porKg } = taxas[modalidade];
    const valorFrete = base + (peso * porKg);
    
    resultadoElement.innerHTML = `
        <strong>Detalhes do frete:</strong><br>
        Peso: ${peso.toFixed(1)} kg<br>
        Modalidade: ${modalidade.charAt(0).toUpperCase() + modalidade.slice(1)}<br>
        Taxa base: R$ ${base.toFixed(2)}<br>
        Taxa por kg: R$ ${porKg.toFixed(2)}<br>
        <strong>Valor total do frete: R$ ${valorFrete.toFixed(2)}</strong>
    `;
    resultadoElement.style.borderLeft = '5px solid #4CAF50';
}

// Adicionar validação em tempo real
document.getElementById('peso').addEventListener('input', function() {
    const pesoInput = this;
    const button = document.querySelector('button');
    
    if (pesoInput.value <= 0) {
        pesoInput.setCustomValidity('O peso deve ser maior que zero.');
        button.disabled = true;
    } else {
        pesoInput.setCustomValidity('');
        button.disabled = false;
    }
});

// Calcular frete automaticamente quando o usuário mudar a modalidade
document.getElementById('modalidade').addEventListener('change', calcularFrete);