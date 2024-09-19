document.getElementById('conversaoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos
    const nome = document.getElementById('inNome').value;
    const celsius = parseFloat(document.getElementById('inCelsius').value);

    // Calculando as conversões
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    // Exibindo o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        Olá, ${nome}!<br>
        A temperatura de ${celsius.toFixed(2)}°C é equivalente a:<br>
        ${fahrenheit.toFixed(2)}°F (Fahrenheit)<br>
        ${kelvin.toFixed(2)} K (Kelvin)
    `;
});
