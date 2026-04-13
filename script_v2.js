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

  // Bail on touch / small screens — hero stays static, scroll animations skipped
  // (keeps mobile rendering 100% predictable)
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  if (isSmallScreen) {
    return;
  }

  try {

    // Register ScrollTrigger plugin if available
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // =============================
    // SCROLL ANIMATIONS — desktop only, hero excluded
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
    document.querySelectorAll("section, .timeline-item").forEach(el => el.removeAttribute("style"));
  }

});