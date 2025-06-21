// particlesJS cấu hình
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": ["#ff5ac0", "#8f52ff", "#33ccff", "#00ffcc"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.6, "random": true },
    "size": { "value": 6, "random": true },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": { "opacity": 0.5 }
      },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

// Hover effect
document.querySelectorAll('.member-box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.05)';
    box.style.transition = '0.3s';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)';
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bgMusic");
  const toggleBtn = document.getElementById("toggleMusicBtn");
  let isPlayed = false;

  // Tự động phát nhạc sau lần tương tác đầu tiên
  const tryAutoPlay = () => {
    if (!isPlayed) {
      music.play()
        .then(() => {
          toggleBtn.innerText = "🔊";
          console.log("🎵 Nhạc đã phát");
        })
        .catch((err) => {
          console.warn("⚠️ Trình duyệt chặn tự động phát:", err);
        });
      isPlayed = true;
    }
  };

  // Sự kiện người dùng kích hoạt tự động phát
  window.addEventListener("click", tryAutoPlay, { once: true });
  window.addEventListener("scroll", tryAutoPlay, { once: true });

  // Nút bật / tắt nhạc
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Ngăn click này gây kích hoạt auto-play lại
    if (music.paused) {
      music.play();
      toggleBtn.innerText = "🔊";
    } else {
      music.pause();
      toggleBtn.innerText = "🔇";
    }
  });
});


