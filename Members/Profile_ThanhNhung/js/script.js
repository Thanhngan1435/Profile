//  hiệu ứng gõ chữ
document.addEventListener("DOMContentLoaded", function () {
  const typingContainer = document.getElementById("typingContainer");
  const textElement = document.getElementById("greetingTypingText");
  const fullText = "Xin chào, tôi là";
  const typingSpeed = 140;
  const erasingSpeed = 80;
  const pauseAfterTyping = 1000;
  const pauseAfterErasing = 500;

  let index = 0;
  let isTyping = true;

  // Hàm gõ và xóa
  function typeLoop() {
    if (isTyping) {
      if (index < fullText.length) {
        textElement.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeLoop, typingSpeed);
      } else {
        isTyping = false;
        setTimeout(typeLoop, pauseAfterTyping);
      }
    } else {
      if (index > 0) {
        textElement.textContent = fullText.substring(0, index - 1);
        index--;
        setTimeout(typeLoop, erasingSpeed);
      } else {
        isTyping = true;
        setTimeout(typeLoop, pauseAfterErasing);
      }
    }
  }

  // Đợi hiệu ứng fadeInRight kết thúc
  typingContainer.addEventListener("animationend", () => {
    typeLoop();
  });
});

 // Nút "Giới thiệu" → cuộn đến phần "about"
document.addEventListener("DOMContentLoaded", function () {
  const introBtn = document.getElementById("goToAbout");
  if (introBtn) {
    introBtn.addEventListener("click", () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Nút "Tải CV" → tải file PDF
const downloadBtn = document.getElementById("downloadCV");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const cvUrl = "cv/ThanhNhung_CV.pdf"; 
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "ThanhNhung_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});

// Hiệu ứng hover cho các thẻ dự án
document.querySelectorAll('.project-card').forEach(card => {
    const btn = card.querySelector('.detail-btn');
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';

    card.addEventListener('mouseenter', () => {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    });

    card.addEventListener('mouseleave', () => {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    });
  });
