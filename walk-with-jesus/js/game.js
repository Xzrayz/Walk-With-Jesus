let currentScene = 0;

const sceneText = document.getElementById('sceneText');
const nextBtn = document.getElementById('nextBtn');
const character = document.getElementById('character');
const music = document.getElementById('bg-music');

function loadScene(sceneIndex) {
  const scene = scenes[sceneIndex];
  if (!scene) return;

  // Change background
  document.body.style.backgroundImage = `url('${scene.background}')`;

  // Change character animation
  character.style.backgroundImage = `url('${scene.character}')`;

  // Set dialogue
  sceneText.innerText = scene.text;
}

nextBtn.addEventListener('click', () => {
  currentScene++;
  if (currentScene >= scenes.length) {
    alert("You've completed the story. Thank you for walking with Jesus.");
    window.location.href = "index.html";
  } else {
    loadScene(currentScene);
  }
});

// Initial load
window.onload = () => {
  loadScene(currentScene);
  music.volume = 1.0;
};
