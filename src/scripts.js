document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(e.target.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  