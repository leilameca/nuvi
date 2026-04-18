document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Header sticky shadow
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
      if (window.scrollY > 50) nav.classList.add('shadow-sm');
      else nav.classList.remove('shadow-sm');
    }
  });

  // Hero Animations
  const tl = gsap.timeline();
  tl.fromTo(".gs-nav-item", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" });
  tl.fromTo(".gs-hero-text", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }, "-=0.4");
  tl.fromTo(".gs-hero-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.6");
  tl.fromTo(".gs-hero-visual", { x: 50, opacity: 0, scale: 0.95 }, { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, "-=0.8");
  tl.fromTo(".gs-img-small", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.9");

  // Services Catalog Animations
  if (document.getElementById('services-section')) {
    gsap.fromTo('#services-section > div > div.text-center > *', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: '#services-section', start: 'top 80%' } }
    );
    
    const categories = document.querySelectorAll('.catalog-category');
    categories.forEach(cat => {
      gsap.fromTo(cat.querySelector('.lg\\:sticky'),
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: cat, start: 'top 80%' } }
      );
      gsap.fromTo(cat.querySelectorAll('.service-detail-card'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: cat, start: 'top 75%' } }
      );
    });
  }

  // Parallax Project Highlight
  if (document.getElementById('project-highlight')) {
    gsap.to("#project-highlight", {
      backgroundPosition: "center -100px", ease: "none",
      scrollTrigger: { trigger: "#project-highlight", start: "top bottom", end: "bottom top", scrub: true }
    });
    gsap.from(".gs-project-content", {
      y: 100, opacity: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: "#project-highlight", start: "top 60%" }
    });
  }

  // Footer Animations
  gsap.from("footer div > *", {
    y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
    scrollTrigger: { trigger: "footer", start: "top 90%" }
  });
});
