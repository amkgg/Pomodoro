/**
 * Pomodoro by Amelia Green
 */

const timerDisplay = document.getElementById("timer");
const runBtn = document.getElementById("start-stop-btn");
const resetBtn = document.getElementById("reset");

const pomodoroBtn = document.getElementById("pomodoro");
const shortBtn = document.getElementById("short-break");
const longBtn = document.getElementById("long-break");

const settingsBtn = document.getElementById("settings");

let pomodoroTimeLength = 25;
let shortBreakLength = 5;
let longBreakLength = 10;

let initialTime = pomodoroTimeLength * 60; // time in seconds
let currentTime = initialTime;
let isTimerRunning = false;
let timerInterval;

function updateTimerDisplay() {
  const min = Math.floor(currentTime / 60);
  const sec = currentTime % 60;
  timerDisplay.textContent = `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
}

function startTimer() {
  isTimerRunning = true;
  runBtn.textContent = `stop`;
  timerInterval = setInterval(() => {
    if (currentTime > 0) {
      currentTime--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      runBtn.textContent = `start`;
      isTimerRunning = false;
    }
  }, 1000);
}

function stopTimer() {
  runBtn.textContent = `start`;
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function runTimer() {
  if (!isTimerRunning) {
    startTimer();
  } else {
    stopTimer();
  }
}

function resetTimer() {
  stopTimer();
  currentTime = initialTime;
  updateTimerDisplay();
}

let tabs = document.getElementsByClassName("mode-btn");
function activateButton() {
  if (true) {
    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }

    this.classList += " active";

    switch (this.id) {
      case "pomodoro":
        initialTime = pomodoroTimeLength * 60;
        break;
      case "short-break":
        initialTime = shortBreakLength * 60;
        break;
      case "long-break":
        initialTime = longBreakLength * 60;
        break;
    }

    resetTimer();
  }
}

runBtn.addEventListener("click", runTimer);
resetBtn.addEventListener("click", resetTimer);
pomodoroBtn.addEventListener("click", activateButton);
shortBtn.addEventListener("click", activateButton);
longBtn.addEventListener("click", activateButton);

updateTimerDisplay();
