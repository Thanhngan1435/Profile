// main.js - Hiển thị các section với hiệu ứng khi cuộn và một số tương tác cơ bản

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hiệu ứng hiện từng section khi cuộn xuống
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Chỉ chạy một lần
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // 2. Scroll to top khi click logo
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Active link highlight
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // 4. Thêm hiệu ứng chữ bằng class typing
  const el = document.querySelector(".animate-text");
  if (el) {
    el.classList.add("typing-effect");
  }

  // 5. Cuộn mượt khi click các liên kết có dấu #
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
});
