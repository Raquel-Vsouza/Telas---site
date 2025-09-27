document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.btn-assinar');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const plano = botao.getAttribute('data-plano');
      const mensagem = botao.parentElement.querySelector('.mensagem');

      botao.disabled = true;
      botao.textContent = 'Processando...';
      if (mensagem) mensagem.textContent = '';

      setTimeout(() => {
        if (plano === 'gratuito') {
          if (mensagem) mensagem.textContent = 'Plano gratuito ativado com sucesso!';
          botao.textContent = 'Ativado';
        } else if (plano === 'conectado' || plano === 'impacto') {
          if (mensagem) mensagem.textContent = 'Você está sendo direcionado para a tela de pagamento...';
          window.location.href = '/pagamentos.html';
        } else {
          if (mensagem) mensagem.textContent = 'Plano não reconhecido.';
        }
      }, 3000);
    });
  });
});