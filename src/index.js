/* eslint-disable no-console */
import {h, render} from 'preact';
import App from './app';

import './style/main.scss';

render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.bundle.js')
    .then(() => console.info('Service Worker Registered'));
}
