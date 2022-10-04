import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {userReducer,postReducer} from "./Redusers/Redusers";

import {App} from './App';


let reducer = combineReducers({
    userReducer,
    postReducer,
});


let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);