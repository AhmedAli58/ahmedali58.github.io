// =============================
// GSAP + SCROLLTRIGGER
// =============================
gsap.registerPlugin(ScrollTrigger);

// =============================
// HERO (keep existing)
// =============================
gsap.from(".hero-text h1", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".hero-tagline", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.from(".hero-links a", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.6,
  stagger: 0.1
});

gsap.from(".hero-photo img", {
  scale: 0.85,
  opacity: 0,
  duration: 1.2,
  delay: 0.4
});

// =============================
// SCROLL ANIMATION (KEY UPGRADE)
// =============================
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});

// =============================
// TIMELINE ANIMATION
// =============================
gsap.utils.toArray(".timeline-item").forEach(item => {
  gsap.from(item, {
    opacity: 0,
    x: -60,
    duration: 0.8,
    scrollTrigger: {
      trigger: item,
      start: "top 90%"
    }
  });
});