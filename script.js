// =============================
// 1. SMOOTH SCROLL (LENIS)
// =============================
const lenis = new Lenis({
  duration: 1.2,
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// =============================
// 2. GSAP SETUP
// =============================
gsap.registerPlugin(ScrollTrigger);

// =============================
// 3. NAV SHADOW (KEEP EXISTING BEHAVIOR)
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
// 4. SMOOTH SCROLL (KEEP LINKS WORKING)
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      lenis.scrollTo(target, {
        offset: -50,
        duration: 1.2
      });
    }
  });
});

// =============================
// 5. HERO ANIMATION
// =============================
gsap.from(".hero-text h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-tagline", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.2
});

gsap.from(".hero-links a", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
  stagger: 0.1
});

gsap.from(".hero-photo img", {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

// =============================
// 6. SECTION SCROLL ANIMATIONS
// =============================
gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    }
  });
});

// =============================
// 7. PROJECT CARD INTERACTION
// =============================
document.querySelectorAll(".project-card").forEach(card => {

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / 15;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 800,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });

});

// =============================
// 8. TIMELINE ANIMATION
// =============================
gsap.utils.toArray(".timeline-item").forEach((item, i) => {
  gsap.from(item, {
    opacity: 0,
    x: -40,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: item,
      start: "top 90%"
    }
  });
});

// =============================
// 9. NAV ACTIVE LINK HIGHLIGHT
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