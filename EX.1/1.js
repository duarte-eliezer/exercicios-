document.getElementById('pesoIdealForm').addEventListener('submit', function(event) {
   event.preventDefault(); // Impede o envio do formulário

   // Obtendo os valores dos campos
   const nome = document.getElementById('inNome').value;
   const altura = parseFloat(document.getElementById('inAltura').value);
   const sexo = document.querySelector('input[name="sexo"]:checked');

   // Verifica se o usuário selecionou o sexo
   if (!sexo) {
       alert('Por favor, selecione o sexo.');
       return;
   }

   // Calculando o peso ideal
   let pesoIdeal;
   if (sexo.id === 'inMasculino') {
       pesoIdeal = 22 * Math.pow(altura, 2);
   } else if (sexo.id === 'inFeminino') {
       pesoIdeal = 21 * Math.pow(altura, 2 );
   } 
   // Exibindo o resultado
   const resultadoDiv = document.getElementById('resultado');
   resultadoDiv.textContent = `Olá, ${nome}! Seu peso ideal é ${pesoIdeal.toFixed(0)} kg.`;
});

