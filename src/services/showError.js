import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function onFetchError() {
  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or make another choice!',
    {
      position: 'center-center',
      timeout: 3000,
      width: '400px',
      fontSize: '24px',
    }
  );
}
