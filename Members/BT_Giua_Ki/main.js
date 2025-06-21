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

  // 3. Active link highlight (optional enhancement)
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
});

document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".animate-text");
  if (!el) return;

  const split = new SplitText(el, { type: "chars" });
  gsap.set(split.chars, { opacity: 0, y: 40 });

  gsap.to(split.chars, {
    opacity: 1,
    y: 0,
    ease: "power3.out",
    duration: 0.6,
    stagger: 0.05,
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});
// Hiệu ứng cuộn mượt khi click vào các liên kết có dấu #
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Kiểm tra tồn tại phần tử
    if (targetElement) {
      e.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 60, // điều chỉnh offset nếu có navbar
        behavior: 'smooth'
      });
    }
  });
});