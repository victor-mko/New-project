import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import './scss/reset-css.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from "react-redux";


let date = new Date();
let year = date.getUTCFullYear();
let month = date.getUTCMonth() + 1;
let day = date.getDate();

let invoiceArray = [
    {
        type: "car",
        date: day + "/" + month + "/" + year,
        cost: 123,
        expensesType: "car",
        what: "used for emphasis with a followitioning as an adverb.",
        settings: "aaaa"
    },
    {
        type: "",
        date: day + "/" + month + "/" + year,
        expensesType: "",
        cost: "",
        what: ""
    }
];


function invoiceList(state = invoiceArray, action) {
    if (action.type === "ADD_INVOICES") {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(invoiceList);


ReactDOM.render(
    <Provider store={store}> 
        <App /> 
    </Provider>,
     document.getElementById('root')
);


registerServiceWorker();