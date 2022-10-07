import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState ={
    posts:[],
    post:[],
    loading:false,
    error:null,

}

const postSlice = createSlice({
    name:'postSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.posts = action.payload
        },
        setCurrentPost: (state, action) => {
            state.post = action.payload
        }
    }
});

const {reducer:postReducer,actions:{getAll,setCurrentPost}}=postSlice

const postActions ={
    getAll,
    setCurrentPost
}

export {
    postReducer,
    postActions
}