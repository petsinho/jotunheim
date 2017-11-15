import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif', 'Amatic SC', 'cursive'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
