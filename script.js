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

    const ease = "power2.out";

    // =============================
    // SECTION HEADINGS
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
          scrollTrigger: { trigger: heading, start: "top 88%" }
        }
      );
    });

    // =============================
    // ABOUT
    // =============================
    gsap.fromTo(".about-text",
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.8, ease, clearProps: "all",
        scrollTrigger: { trigger: ".about-text", start: "top 88%" }
      }
    );

    gsap.fromTo(".skills span",
      { opacity: 0, y: 12 },
      {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.04, ease, clearProps: "all",
        scrollTrigger: { trigger: ".skills", start: "top 90%" }
      }
    );

    // =============================
    // TIMELINE
    // =============================
    gsap.utils.toArray(".timeline-item").forEach(item => {
      gsap.fromTo(item,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.7, ease, clearProps: "all",
          scrollTrigger: { trigger: item, start: "top 88%" }
        }
      );
    });

    // =============================
    // PROJECT CARDS
    // =============================
    gsap.fromTo(".project-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease, clearProps: "all",
        scrollTrigger: { trigger: ".projects-grid", start: "top 85%" }
      }
    );

    // =============================
    // CERT CARDS
    // =============================
    gsap.fromTo(".cert-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease, clearProps: "all",
        scrollTrigger: { trigger: ".certs-grid", start: "top 85%" }
      }
    );

    // =============================
    // HERO PARALLAX — subtle photo drift on scroll + mouse
    // =============================
    const heroPhoto = document.querySelector(".hero-photo img");

    if (heroPhoto) {

      // Scroll parallax: photo drifts up ~30px as user scrolls past hero
      gsap.to(heroPhoto, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.5
        }
      });

      // Mouse parallax: photo shifts a few pixels based on cursor position
      // Uses a quickTo for smooth, throttled updates (GSAP best practice)
      const xTo = gsap.quickTo(heroPhoto, "x", { duration: 0.6, ease: "power3.out" });
      const yTo = gsap.quickTo(heroPhoto, "y", { duration: 0.6, ease: "power3.out" });

      const hero = document.querySelector("#hero");
      hero.addEventListener("mousemove", (e) => {
        const rect = hero.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        xTo(relX * 12);   // max ±6px horizontal
        yTo(relY * 12);   // max ±6px vertical
      });

      hero.addEventListener("mouseleave", () => {
        xTo(0);
        yTo(0);
      });

    }

  } catch (err) {
    console.warn("Animation setup failed, clearing inline styles:", err);
    document.querySelectorAll("section, .timeline-item, .project-card, .cert-card, .skills span, .about-text, .hero-photo img")
      .forEach(el => el.removeAttribute("style"));
  }

});