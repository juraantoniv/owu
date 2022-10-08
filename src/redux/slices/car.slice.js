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
    },
        setCurrentUser: (state, action) => {
            state.cars = action.payload
        },
}});

const {reducer:carReducer,actions:{getAll,deleteById,setCurrentUser}}=carsSlice

const carActions ={
    getAll,
    deleteById,
    setCurrentUser

}

export {
    carReducer,
    carActions
}
