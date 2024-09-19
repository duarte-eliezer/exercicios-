
document.getElementById('mediaForm').addEventListener('submit', function(event) {
   event.preventDefault(); // Impede o envio do formulário

   // Obtendo os valores dos campos de nota
   const nota1 = parseFloat(document.getElementById('inNota1').value);
   const nota2 = parseFloat(document.getElementById('inNota2').value);
   const nota3 = parseFloat(document.getElementById('inNota3').value);

   // Calculando a média
   const media = (nota1 + nota2 + nota3) / 3;

   // Exibindo o resultado
   const resultadoDiv = document.getElementById('resultado');
   resultadoDiv.textContent = `A média das notas é ${media.toFixed(2)}`;
});
