// =============================
// 1. LENIS (OPTIMIZED)
// =============================
const lenis = new Lenis({
  duration: 1,
  smooth: true
});

// IMPORTANT: Sync GSAP with Lenis (fix lag)
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// =============================
// 2. GSAP SETUP
// =============================
gsap.registerPlugin(ScrollTrigger);

// =============================
// 3. NAV SHADOW
// =============================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// =============================
// 4. NAV CLICK SCROLL (LENIS SAFE)
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      lenis.scrollTo(target, {
        offset: -50
      });
    }
  });
});

// =============================
// 5. HERO ANIMATION (LIGHTER)
// =============================
gsap.from(".hero-text h1", {
  y: 40,
  opacity: 0,
  duration: 0.8
});

gsap.from(".hero-tagline", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 0.1
});

gsap.from(".hero-links a", {
  y: 20,
  opacity: 0,
  duration: 0.6,
  delay: 0.2,
  stagger: 0.08
});

gsap.from(".hero-photo img", {
  scale: 0.95,
  opacity: 0,
  duration: 0.8,
  delay: 0.2
});

// =============================
// 6. SECTION ANIMATION (REDUCED LOAD)
// =============================
gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      once: true   // KEY: runs only once → performance boost
    }
  });
});

// =============================
// 7. PROJECT CARDS (THROTTLED)
// =============================
document.querySelectorAll(".project-card").forEach(card => {

  let ticking = false;

  card.addEventListener("mousemove", (e) => {
    if (ticking) return;

    requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = -(y - rect.height / 2) / 20;
      const rotateY = (x - rect.width / 2) / 20;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.2,
        ease: "power1.out"
      });

      ticking = false;
    });

    ticking = true;
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.3
    });
  });

});

// =============================
// 8. TIMELINE (LIGHT)
// =============================
gsap.utils.toArray(".timeline-item").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    x: -30,
    duration: 0.5,
    scrollTrigger: {
      trigger: item,
      start: "top 92%",
      once: true
    }
  });
});

// =============================
// 9. NAV ACTIVE LINK
// =============================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute("id");
    }
  });

  document.querySelectorAll("#nav a").forEach(a => {
    a.classList.remove("active");

    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});