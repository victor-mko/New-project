import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import './scss/reset-css.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from "react-redux";



const store = createStore(invoiceList);


ReactDOM.render( 
    <Provider store = { store } >
        <App />
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();