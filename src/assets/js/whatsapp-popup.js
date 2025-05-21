// Função para abrir o popup de WhatsApp
function openWhatsAppPopup(event) {
  // Previne o comportamento padrão do link
  if (event) event.preventDefault();
  
  // Ativa o overlay do popup
  document.getElementById('whatsapp-popup-overlay').classList.add('active');
  
  // Impede o scroll da página enquanto o popup estiver aberto
  document.body.style.overflow = 'hidden';
}

// Função para fechar o popup
function closeWhatsAppPopup() {
  // Remove a classe active do overlay
  document.getElementById('whatsapp-popup-overlay').classList.remove('active');
  
  // Restaura o scroll da página
  document.body.style.overflow = '';
}

// Função para redirecionar para o WhatsApp com mensagem pré-definida
function redirectToWhatsApp() {
  // Número de telefone
  const phoneNumber = "554998017200";
  
  // Mensagem pré-digitada (codificada para URL)
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da LCS Assessoria.");
  
  // Construir a URL do WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Redirecionar para o WhatsApp
  window.open(whatsappUrl, '_blank');
  
  // Fechar o popup
  closeWhatsAppPopup();
}

// Adicionar event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  // Adicionar evento para fechar o popup quando clicar no overlay
  document.getElementById('whatsapp-popup-overlay').addEventListener('click', function(event) {
    if (event.target === this) {
      closeWhatsAppPopup();
    }
  });
  
  // Adicionar evento ao botão de fechar
  document.getElementById('whatsapp-popup-close').addEventListener('click', closeWhatsAppPopup);
  
  // Adicionar evento ao botão de enviar mensagem
  document.getElementById('whatsapp-popup-btn').addEventListener('click', redirectToWhatsApp);
  
  // Configurar todos os botões e links do WhatsApp para abrir o popup
  const whatsappLinks = document.querySelectorAll('.whatsapp-float, .whatsapp');
  whatsappLinks.forEach(link => {
    link.addEventListener('click', openWhatsAppPopup);
  });
});
