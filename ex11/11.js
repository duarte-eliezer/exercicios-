function calcularFrete() {
    const peso = parseFloat(document.getElementById('peso').value);
    const modalidade = document.getElementById('modalidade').value;
    
    if (isNaN(peso) || peso <= 0) {
        alert('Por favor, insira um peso válido.');
        return;
    }
    
    let taxaBase;
    switch(modalidade) {
        case 'padrao':
            taxaBase = 10;
            break;
        case 'expresso':
            taxaBase = 20;
            break;
        case 'internacional':
            taxaBase = 50;
            break;
    }
    
    const valorFrete = taxaBase + (peso * 2);
    document.getElementById('resultado').textContent = `Valor do frete: R$ ${valorFrete.toFixed(2)}`;
}