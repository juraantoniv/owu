import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {carService} from "../../services/car.service";
import car from "../../components/Car/Car";



const initialState ={
    cars:[],
    car:[]
}


const getAllAsync = createAsyncThunk(
    'postSlice/getAll',
    async (_,{rejectWithValue})=>{

        try {
            const {data} = await carService.getAll()
            return data
        }
        catch (e){
            return rejectWithValue(e.response.data)

        }

    }
)




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
        extraReducers:{
            [getAllAsync.fulfilled]:(state,action)=>{
                state.cars =action.payload
            }
        },
    }});

const {reducer:carReducer,actions:{getAll,deleteById,setCurrentUser}}=carsSlice

const carActions ={
    getAll,
    deleteById,
    setCurrentUser,
    getAllAsync

}

export {
    carReducer,
    carActions
}