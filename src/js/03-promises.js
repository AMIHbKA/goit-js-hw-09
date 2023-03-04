import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

const {
  delay: delayEl,
  step: stepEl,
  amount: amountEl,
} = document.querySelector('.form').elements;

function onFormSubmit(e) {
  e.preventDefault();

  let delay = Number(delayEl.value);
  const STEP_DELAY = Number(stepEl.value);
  const AMOUNT = Number(amountEl.value);

  for (let i = 1; i <= AMOUNT; i += 1) {
    createPromise(i, delay)
      .then(success => Notify.success(success))
      .catch(error => Notify.failure(error));
    delay += STEP_DELAY;
  }
}

addEventListener('submit', onFormSubmit);
