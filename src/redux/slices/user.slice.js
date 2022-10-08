import {createSlice, current} from "@reduxjs/toolkit";



const initialState ={
    users:[],
    user:[]
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
        },
        deleteById: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload);
            state.users.splice(index, 1)
            console.log(current(state.users));
        }
    }
});

const {reducer:userReducer,actions:{getAll,setCurrentUser,deleteById}}=userSlice

const userActions ={
    getAll,
    setCurrentUser,
    deleteById
}

export {
    userReducer,
    userActions
}