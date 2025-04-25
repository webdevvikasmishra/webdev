// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = window.innerWidth < 768 ? 15 : 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 5px and 15px
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration and delay
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
    
    particlesContainer.appendChild(particle);
  }
}

// Toggle mobile menu
function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  
  // Toggle body scroll when menu is open
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

// Close mobile menu when clicking a link
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Theme toggle
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById("themeIcon");
  if (html.getAttribute('data-theme') === 'light') {
    html.setAttribute('data-theme', 'dark');
    icon.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    html.setAttribute('data-theme', 'light');
    icon.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('active');
  } else {
    scrollTopBtn.classList.remove('active');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-section');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden-section').forEach(el => observer.observe(el));

// Initialize particles on load
window.addEventListener('load', createParticles);