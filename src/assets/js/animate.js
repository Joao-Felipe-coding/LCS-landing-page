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
  const sCards = document.querySelectorAll('.service-card');
  const textServices = document.querySelector('.text-services');
  const photoServices = document.querySelector('.photo-services')

  if (!sCards.length || !textServices|| !photoServices) return;

  const observer = new window.IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(textServices);
  observer.observe(photoServices);
  for (const card of sCards) {
    observer.observe(card);
  }
}

// Inicialização das animações ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  animateAboutSection();
  animateServicesSection();
});
