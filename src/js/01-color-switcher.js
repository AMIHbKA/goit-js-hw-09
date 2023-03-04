const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let colorInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopHadler() {
  refs.btnStop.disabled = true;
  refs.btnStart.disabled = false;
  clearInterval(colorInterval);
}

function onStartHadler() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  colorInterval = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

refs.btnStop.disabled = true;

refs.btnStop.addEventListener('click', onStopHadler);
refs.btnStart.addEventListener('click', onStartHadler);
