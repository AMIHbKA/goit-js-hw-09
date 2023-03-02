import flatpickr from 'flatpickr';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  choosenDate: 0,
  dateFromFuture: false,
  diffTime: 0,
  intervalId: null,
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.btnStart.disabled = true;

const options = {
  dateFormat: 'd-m-Y H:i',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: Ukrainian,
  onClose(selectedDates) {
    refs.choosenDate = selectedDates[0];
    refs.diffTime = refs.choosenDate - new Date();
    refs.dateFromFuture = refs.diffTime > 0;
    if (refs.dateFromFuture === false) {
      refs.btnStart.disabled = true;
      alert('Please choose a date in the future');
      return;
    }

    refs.btnStart.disabled = false;
  },
};

const fp = flatpickr('#datetime-picker', options);

refs.btnStart.addEventListener('click', onBtnStartHandler);

function onBtnStartHandler(e) {
  refs.intervalId = setInterval(timerCount, 1000);
  // В условиях сказано, что "Если таймер запущен, для того чтобы выбрать новую дату и перезапустить его - необходимо перезагрузить страницу".
  fp.destroy();
  refs.btnStart.disabled = true;
}

function timerCount() {
  const diffTime = refs.choosenDate - new Date();
  if (diffTime <= 1000) {
    clearInterval(refs.intervalId);
  }

  const { days, hours, minutes, seconds } = convertMs(diffTime);

  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}
