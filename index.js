document.addEventListener('DOMContentLoaded', () => {
  // Initialisation des icônes Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Traitement éventuel des ancres dynamiques
  const hash = window.location.hash;
  if (hash) {
    const targetCard = document.querySelector(`a[href="${hash.replace('#', '')}.html"]`);
    if (targetCard) {
      targetCard.classList.add('ring-2', 'ring-black');
    }
  }
});
