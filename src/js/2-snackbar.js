import iziToast from 'https://cdn.jsdelivr.net/npm/izitoast@1.4.0/+esm';
import 'https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const delay = Number(formData.get('delay'));
  const state = formData.get('state');

  createPromise(delay, state)
    .then(resultDelay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${resultDelay}ms`,
        position: 'topRight',
      });
    })
    .catch(resultDelay => {
      iziToast.error({
        message: `❌ Rejected promise in ${resultDelay}ms`,
        position: 'topRight',
      });
    });

  event.currentTarget.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}