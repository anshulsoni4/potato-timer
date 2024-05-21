let timer;
let timeLeft = 1500; // 25 minutes in seconds
let isRunning = false;

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const closeButton = document.getElementById('close');

function updateTimeDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timeDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function playSound() {
  const audio = new Audio('alert.mp3');
  audio.play();
}

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimeDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      playSound();
      timeLeft = 1500; // Reset to 25 minutes
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 1500;
  updateTimeDisplay();
}

function closePopup() {
  window.close();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
closeButton.addEventListener('click', closePopup);

updateTimeDisplay();
