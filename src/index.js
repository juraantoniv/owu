import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {userReducer,postReducer} from "./Redusers/Redusers";

import {App} from './App';
import {BrowserRouter} from "react-router-dom";


let reducer = combineReducers({
    userReducer,
    postReducer,
});

console.log(userReducer)

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
        </BrowserRouter>
);