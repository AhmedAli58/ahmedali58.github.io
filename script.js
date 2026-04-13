// =============================
// GSAP + SCROLLTRIGGER
// =============================

document.addEventListener("DOMContentLoaded", () => {

  // Bail if GSAP failed to load (CDN failure, offline, etc.)
  if (typeof gsap === "undefined") {
    return;
  }

  // Respect user's reduced-motion preference — skip all animations
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  try {

    // Register ScrollTrigger plugin if available
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // =============================
    // HERO — fromTo guarantees visible end state
    // =============================
    gsap.fromTo(".hero-text h1",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", clearProps: "all" }
    );

    gsap.fromTo(".hero-tagline",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, clearProps: "all" }
    );

    gsap.fromTo(".hero-links a",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.6, stagger: 0.1, clearProps: "all" }
    );

    gsap.fromTo(".hero-photo img",
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, delay: 0.4, clearProps: "all" }
    );

    // =============================
    // SCROLL ANIMATIONS — only if ScrollTrigger is available
    // =============================
    if (typeof ScrollTrigger !== "undefined") {

      gsap.utils.toArray("section:not(#hero)").forEach(section => {
        gsap.fromTo(section,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: section,
              start: "top 85%"
            }
          }
        );
      });

      gsap.utils.toArray(".timeline-item").forEach(item => {
        gsap.fromTo(item,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            clearProps: "all",
            scrollTrigger: {
              trigger: item,
              start: "top 90%"
            }
          }
        );
      });

    }

  } catch (err) {
    // If any GSAP call fails, ensure nothing is left invisible
    console.warn("Animation setup failed, clearing inline styles:", err);
    document.querySelectorAll(
      ".hero-text h1, .hero-tagline, .hero-links a, .hero-photo img, section, .timeline-item"
    ).forEach(el => el.removeAttribute("style"));
  }

});