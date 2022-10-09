import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./redax-toll-kit/redax";


const rootReducer =combineReducers({
    carReducer


})

const setupStore =()=>configureStore({
    reducer:rootReducer
})

export {
    setupStore
}