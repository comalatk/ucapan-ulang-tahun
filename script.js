// Musik autoplay pada interaksi pertama (untuk iOS/Chrome)
window.addEventListener('click', () => {
  const audio = document.getElementById('bgm');
  if (audio.paused) {
    audio.play();
  }
});

// Efek confetti berulang tiap 5 detik
setInterval(() => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}, 5000);
