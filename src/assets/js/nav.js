// Flag para indicar se o scroll suave está em andamento
let isScrolling = false;

// Função para scroll suave até uma seção
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    isScrolling = true; // Ativa a flag
    const offsetTop = section.offsetTop - 100; // Ajuste para navbar e possível sobreposição do botão do WhatsApp
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
  if (isScrolling) return;

  const sections = document.querySelectorAll("main > section");
  const radios = document.querySelectorAll(".wrap input[type='radio']");
  let closestSection = null;
  let minDistance = Number.POSITIVE_INFINITY;
  const offset = 100; // Compensa a navbar fixa

  // Se estiver no topo da página, ativa a aba Início
  if (window.scrollY < 400) {
    for (const radio of radios) {
      radio.checked = radio.id === 'rd-Inicio';
    }
    return;
  }

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.top - offset);
    if (distance < minDistance) {
      minDistance = distance;
      closestSection = section;
    }
  }

  if (closestSection) {
    const activeId = closestSection.id;
    for (const radio of radios) {
      radio.checked = radio.id === `rd-${activeId}`;
    }
  }
}

// Adiciona o evento de scroll com debounce
window.addEventListener("scroll", debounce(updateActiveSection, 100));