import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import { log } from 'util';
import { fail } from 'assert';
import { request } from 'http';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif', 'Amatic SC', 'Iceland', 'cursive'],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

