// =============================
// ZERO-LAG BASELINE SCRIPT
// =============================

// NAV SHADOW (optimized with passive scroll)
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
  } else {
    nav.style.boxShadow = 'none';
  }
}, { passive: true });


// SMOOTH SCROLL (native, no JS overhead)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});