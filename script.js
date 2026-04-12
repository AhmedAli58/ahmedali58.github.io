// =============================
// HERO ANIMATION (VISIBLE)
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