// =============================
// 1. GSAP SETUP
// =============================
gsap.registerPlugin(ScrollTrigger);

// =============================
// 2. NAV SHADOW (LIGHT)
// =============================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// =============================
// 3. SMOOTH SCROLL (NATIVE FAST)
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// =============================
// 4. HERO (VERY LIGHT)
// =============================
gsap.from(".hero-text h1", {
  y: 30,
  opacity: 0,
  duration: 0.6
});

gsap.from(".hero-tagline", {
  y: 20,
  opacity: 0,
  duration: 0.6,
  delay: 0.1
});

gsap.from(".hero-links a", {
  y: 15,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.08
});

gsap.from(".hero-photo img", {
  opacity: 0,
  duration: 0.6,
  delay: 0.2
});

// =============================
// 5. SECTION ANIMATION (ONCE ONLY)
// =============================
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 30,
    duration: 0.5,
    scrollTrigger: {
      trigger: section,
      start: "top 92%",
      once: true // critical for performance
    }
  });
});

// =============================
// 6. TIMELINE (LIGHT)
// =============================
gsap.utils.toArray(".timeline-item").forEach(item => {
  gsap.from(item, {
    opacity: 0,
    x: -20,
    duration: 0.4,
    scrollTrigger: {
      trigger: item,
      start: "top 95%",
      once: true
    }
  });
});

// =============================
// 7. PROJECT CARDS (CSS ONLY)
// =============================
// No JS tilt → removes lag completely

// =============================
// 8. NAV ACTIVE LINK (LIGHT)
// =============================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.id;
    }
  });

  document.querySelectorAll("#nav a").forEach(a => {
    a.classList.remove("active");

    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});