import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState ={
    users:[],
    user:[],
    loading:false,
    error:null,
    usrFormApi:null
}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action) => {
            state.user = action.payload
        }
    }
});

const {reducer:userReducer,actions:{getAll,setCurrentUser}}=userSlice

const userActions ={
    getAll,
    setCurrentUser
}

export {
    userReducer,
    userActions
}