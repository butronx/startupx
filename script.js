// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Optional: Form submit feedback (demo only)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Message sent! (This is just a demo.)");
  form.reset();
});