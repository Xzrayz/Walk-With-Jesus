// audio.js

let currentMusic = null;
let isMuted = false;

// Play a specific music track by filename
function playMusic(filename, volume = 1.0) {
  if (currentMusic) {
    currentMusic.pause();
    currentMusic.currentTime = 0;
  }

  currentMusic = new Audio(`audio/${filename}`);
  currentMusic.loop = true;
  currentMusic.volume = volume;

  if (!isMuted) {
    currentMusic.play();
  }
}

// Toggle mute
function toggleMute() {
  isMuted = !isMuted;
  if (currentMusic) {
    currentMusic.muted = isMuted;
  }
}

// Fade out current track
function fadeOutMusic(duration = 1000) {
  if (!currentMusic) return;
  const step = currentMusic.volume / (duration / 100);
  const fade = setInterval(() => {
    if (currentMusic.volume > 0) {
      currentMusic.volume -= step;
    } else {
      clearInterval(fade);
      currentMusic.pause();
    }
  }, 100);
}
