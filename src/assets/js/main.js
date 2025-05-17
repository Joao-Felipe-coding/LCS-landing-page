// FAQ funcional: apenas um aberto por vez
window.addEventListener('DOMContentLoaded', function() {
  const toggles = document.querySelectorAll('.faq-toggle');
  toggles.forEach((toggle) => {
    toggle.addEventListener('change', function() {
      if (this.checked) {
        for (const other of toggles) {
          if (other !== this) other.checked = false;
        }
      }
    });
  });
});