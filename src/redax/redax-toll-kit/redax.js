import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {carService} from "../../services/car.service";
import car from "../../components/Car/Car";


const initialState = {
    cars: [],
    car: []
}


const getAllAsync = createAsyncThunk(
    'carSlice1/getAll1',
    async (_, {rejectWithValue}) => {

        try {
            const {data} = await carService.getAll()
            return data.data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
)
const postAllAsync = createAsyncThunk(
    'carSlice/crate',
    async (obj, {rejectWithValue}) => {

        try {
            const {data} = await carService.create(obj)
            console.log(data)
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
)


const updateAllAsync = createAsyncThunk(
    'carSlice/getAll',
    async ({id, data}, {rejectWithValue}) => {

        try {
            const {data} = await carService.updateById(id,data)
            console.log(data)
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
)



const carsSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.car = action.payload
        },
    },
    extraReducers: {
        [getAllAsync.fulfilled]: (state, action) => {
            state.cars = action.payload
        },
        [postAllAsync.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
        },
        [updateAllAsync.fulfilled]: (state, action) => {
            const findCar = state.cars.find(value => value.id === action.payload.id);
            Object.assign(findCar,action.payload);
            state.carForUpdate = null;
        }
    },
});

const {reducer: carReducer, actions: {getAll, deleteById, setCurrentUser}} = carsSlice

const carActions = {
    getAll,
    deleteById,
    setCurrentUser,
    getAllAsync,
    postAllAsync,
    updateAllAsync

}

export {
    carReducer,
    carActions
}