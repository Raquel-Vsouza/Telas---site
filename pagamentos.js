const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Aqui você pode validar os dados, salvar, etc.

  // Redireciona para a tela de pagamento
  window.location.href = '/pagamentos/pagamentos.html';
});