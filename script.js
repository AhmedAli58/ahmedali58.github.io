// =============================
// MODERN GSAP (FAST + VISIBLE)
// =============================
gsap.registerPlugin(ScrollTrigger);

// HERO (strong first impression)
gsap.from(".hero-text h1", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-tagline", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.2
});

gsap.from(".hero-links a", {
  y: 20,
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
  stagger: 0.1
});

gsap.from(".hero-photo img", {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

// SECTIONS (clean scroll reveal)
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

// PROJECT CARDS (visible interaction)
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.03,
      duration: 0.3
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3
    });
  });
});

// TIMELINE (clean slide)
gsap.utils.toArray(".timeline-item").forEach(item => {
  gsap.from(item, {
    opacity: 0,
    x: -50,
    duration: 0.6,
    scrollTrigger: {
      trigger: item,
      start: "top 85%"
    }
  });
});

// NAV SHADOW (keep fast)
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = "0 2px 16px rgba(0,0,0,0.08)";
  } else {
    nav.style.boxShadow = "none";
  }
}, { passive: true });

// NAV ACTIVE LINK
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