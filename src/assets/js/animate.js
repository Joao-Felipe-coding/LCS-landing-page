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
  const title = document.querySelector('.services-title');
  const subtitle = document.querySelector('.services-subtitle');
  if (!sCards.length || !title || !subtitle) return;

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

  observer.observe(title);
  observer.observe(subtitle);
  for (const card of sCards) {
    observer.observe(card);
  }
}

//Animação da seção contato
function animateContactSection() {
  const cCards = document.querySelectorAll('.contact-card');
  const title = document.querySelector('.contact-title');
  const cForm = document.querySelector('.contact-form');
  const subtitle = document.querySelector('.contact-subtitle');
  if (!cForm || !cCards || !title || !subtitle) return;

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

  observer.observe(title);
  observer.observe(subtitle);
  observer.observe(cForm);
  for (const card of cCards) {
    observer.observe(card);
  }
}

// Inicialização das animações ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  animateAboutSection();
  animateServicesSection();
  animateContactSection();
});
