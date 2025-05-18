// FAQ funcional: apenas um aberto por vez
window.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.faq-toggle');
  for (const toggle of toggles) {
    toggle.addEventListener('change', (event) => {
      if (event.target.checked) {
        for (const other of toggles) {
          if (other !== event.target) other.checked = false;
        }
      }
    });
  }
});