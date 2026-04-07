document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".section, .hero-text, .hero-photo").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});
