import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import './scss/reset-css.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
