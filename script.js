document.getElementById('year').textContent = new Date().getFullYear();

// Fade projects in as they scroll into view
const projects = document.querySelectorAll('.project');
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  projects.forEach((p) => io.observe(p));
}
