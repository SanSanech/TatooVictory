let scrollTimeout = null;
let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  
  if (scrolled !== lastScrollPosition) {
    clearTimeout(scrollTimeout);
    document.getElementById('header').classList.add('hidden');
    scrollTimeout = setTimeout(function() {
      document.getElementById('header').classList.remove('hidden');
    }, 300); // Пауза в 300 мс
  }
  
  lastScrollPosition = scrolled;
});