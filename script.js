// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx - 5 + 'px';
  cursor.style.top  = my - 5 + 'px';
});

function animateRing() {
  rx += (mx - rx - 18) * 0.12;
  ry += (my - ry - 18) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

const hoverTargets = document.querySelectorAll(
  'a, button, .stat-card, .toolkit-card, .cert-card, .project-card, .social-link'
);
hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
});

// ===== PARTICLES =====
const particleContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  p.style.left             = Math.random() * 100 + '%';
  p.style.top              = Math.random() * 100 + '%';
  p.style.animationDelay    = Math.random() * 4 + 's';
  p.style.animationDuration = (3 + Math.random() * 4) + 's';
  p.style.opacity           = Math.random() * 0.5;
  particleContainer.appendChild(p);
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== ACTIVE NAV HIGHLIGHT =====
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--text-primary)'
      : '';
  });
});

// ===== SCROLL TO PROJECTS =====
function scrollToProjects() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

// ===== TOGGLE ABOUT =====
function toggleAbout() {
  const el  = document.getElementById('moreAbout');
  const btn = document.querySelector('.about-btn');
  el.classList.toggle('open');
  btn.textContent = el.classList.contains('open') ? 'Less About Me' : 'More About Me';
}