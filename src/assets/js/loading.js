// Tela de loading
window.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const MIN_LOADING_TIME = 3500; // 3 segundos
  const HIDE_ANIMATION_TIME = 800; // tempo da animação de saída
  const start = Date.now();

  function hideLoading() {
    loadingScreen.classList.add('hide');
    // Só remove do DOM após a animação de saída
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      // Libera o scroll do body após o loading sumir
      document.body.style.overflow = '';
    }, HIDE_ANIMATION_TIME);
  }

  // Impede scroll enquanto loading está ativo
  document.body.style.overflow = 'hidden';

  window.addEventListener('load', () => {
    const elapsed = Date.now() - start;
    const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);
    setTimeout(hideLoading, remaining);
  });
});