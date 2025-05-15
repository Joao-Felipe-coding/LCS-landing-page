// Ativa animação quando a section 'Sobre' entra na tela
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

document.addEventListener('DOMContentLoaded', animateAboutSection);
