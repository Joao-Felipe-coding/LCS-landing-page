// Flag para indicar se o scroll suave está em andamento
let isScrolling = false;

// Função para scroll suave até uma seção
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    isScrolling = true; // Ativa a flag
    const offsetTop = section.offsetTop - 80; // Ajuste para navbar
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });

    // Atualiza o rádio correspondente imediatamente
    const radio = document.getElementById(`rd-${sectionId}`);
    if (radio) {
      radio.checked = true;
    }

    // Desativa a flag após o scroll terminar (estimativa de 500ms)
    setTimeout(() => {
      isScrolling = false;
    }, 500);
  }
}

// Função para debounce
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Função para atualizar a seção ativa
function updateActiveSection() {
  // Evita atualizar durante o scroll suave
  if (isScrolling) return;

  const sections = document.querySelectorAll("main > section");
  const radios = document.querySelectorAll(".wrap input[type='radio']");
  let activeSectionId = null;

  // Encontra a seção mais próxima do centro da janela
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // Verifica se a seção está no centro da janela
    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
      activeSectionId = section.id;
    }
  }

  // Atualiza o rádio apenas se uma seção válida for encontrada
  if (activeSectionId) {
    for (const radio of radios) {
      radio.checked = radio.id === `rd-${activeSectionId}`;
    }
  }
}

// Adiciona o evento de scroll com debounce
window.addEventListener("scroll", debounce(updateActiveSection, 100));