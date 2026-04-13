// =============================
// GSAP + SCROLLTRIGGER — V2
// =============================

document.addEventListener("DOMContentLoaded", () => {

  // Bail if GSAP failed to load
  if (typeof gsap === "undefined") {
    return;
  }

  // Respect reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // Skip all animations on mobile for guaranteed visibility
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  if (isSmallScreen) {
    return;
  }

  try {

    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (typeof ScrollTrigger === "undefined") {
      return;
    }

    // Shared easing for a cohesive feel
    const ease = "power2.out";

    // =============================
    // SECTION HEADINGS — fade + slight rise
    // =============================
    gsap.utils.toArray("section:not(#hero) h2").forEach(heading => {
      gsap.fromTo(heading,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease,
          clearProps: "all",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%"
          }
        }
      );
    });

    // =============================
    // ABOUT — paragraph + skills pills stagger
    // =============================
    gsap.fromTo(".about-text",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease,
        clearProps: "all",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 88%"
        }
      }
    );

    gsap.fromTo(".skills span",
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.04,
        ease,
        clearProps: "all",
        scrollTrigger: {
          trigger: ".skills",
          start: "top 90%"
        }
      }
    );

    // =============================
    // TIMELINE ITEMS — fade + slide from left, staggered per section
    // =============================
    gsap.utils.toArray(".timeline-item").forEach(item => {
      gsap.fromTo(item,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease,
          clearProps: "all",
          scrollTrigger: {
            trigger: item,
            start: "top 88%"
          }
        }
      );
    });

    // =============================
    // PROJECT CARDS — grid stagger
    // =============================
    gsap.fromTo(".project-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease,
        clearProps: "all",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%"
        }
      }
    );

    // =============================
    // CERT CARDS — grid stagger
    // =============================
    gsap.fromTo(".cert-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.06,
        ease,
        clearProps: "all",
        scrollTrigger: {
          trigger: ".certs-grid",
          start: "top 85%"
        }
      }
    );

  } catch (err) {
    console.warn("Animation setup failed, clearing inline styles:", err);
    document.querySelectorAll("section, .timeline-item, .project-card, .cert-card, .skills span, .about-text")
      .forEach(el => el.removeAttribute("style"));
  }

});