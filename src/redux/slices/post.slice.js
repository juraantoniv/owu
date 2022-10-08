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
        },
        deleteById: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index, 1)
            console.log(current(state.posts));
        }
    }
});

const {reducer:postReducer,actions:{getAll,setCurrentPost,deleteById}}=postSlice

const postActions ={
    getAll,
    setCurrentPost,
    deleteById
}

export {
    postReducer,
    postActions
}