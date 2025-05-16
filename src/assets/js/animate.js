// Animação da seção Sobre
function animateAboutSection() {
  const aboutSection = document.querySelector('.about');
  const textAbout = document.querySelector('.text-about');
  const photoAbout = document.querySelector('.photo-about');

  if (!aboutSection || !textAbout || !photoAbout) return;

  const observer = new window.IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          textAbout.classList.add('animate');
          photoAbout.classList.add('animate');
          observer.disconnect();
        }
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(aboutSection);
}

// Animação dos cards de serviços
function animateServicesSection() {
  const cards = document.querySelectorAll('.service-card');
  const title = document.querySelector('.services-title');
  const subtitle = document.querySelector('.services-subtitle');
  if (!cards.length || !title || !subtitle) return;

  const observer = new window.IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(title);
  observer.observe(subtitle);
  for (const card of cards) {
    observer.observe(card);
  }
}

// Inicialização das animações ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  animateAboutSection();
  animateServicesSection();
});
