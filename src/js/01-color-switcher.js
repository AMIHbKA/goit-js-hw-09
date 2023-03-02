const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let colorInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopHadler() {
  btnStop.disabled = true;
  btnStart.disabled = false;
  clearInterval(colorInterval);
}

function onStartHadler() {
  btnStart.disabled = true;
  btnStop.disabled = false;

  colorInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

btnStop.disabled = true;

btnStop.addEventListener('click', onStopHadler);
btnStart.addEventListener('click', onStartHadler);
