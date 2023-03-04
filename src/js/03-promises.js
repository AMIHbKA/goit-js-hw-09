import { Notify } from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

const refs = {
  firstDelay: document.querySelector('input[name="delay"]'),
  stepDelay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnCreate: document.querySelector('button[type="submit"]'),
};

refs.btnCreate.addEventListener('click', () => {
  console.log('click');
});

createPromise(1, 3000)
  .then(f => Notify.success(f))
  .catch(r => Notify.failure(r));
createPromise(2, 1000)
  .then(f => Notify.success(f))
  .catch(r => Notify.failure(r));

function onClickBtnCreatePromises() {
    if ()
  }
