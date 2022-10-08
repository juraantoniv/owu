import {createSlice, current} from "@reduxjs/toolkit";



const initialState ={
    cars:[],
    car:[]
}

const carsSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.cars = action.payload
        },
        deleteById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload);
            state.cars.splice(index, 1)

    }
}});

const {reducer:carReducer,actions:{getAll,deleteById}}=carsSlice

const carActions ={
    getAll,
    deleteById

}

export {
    carReducer,
    carActions
}
