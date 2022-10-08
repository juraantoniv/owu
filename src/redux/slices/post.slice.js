import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {postService} from "../../services";

const initialState ={
    posts:[],
    post:[],
    loading:false,
    error:null,
}


const getAllAsync = createAsyncThunk(
    'postSlice/getAll',
    async (_,{rejectWithValue})=>{

        try {
           const {data} = await postService.getAll()
            return data
        }
        catch (e){
            return rejectWithValue(e.response.data)

        }

    }
)


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
    },
    // extraReducers:{
    //     [getAllAsync.fulfilled]:(state,action)=>{
    //         state.posts =action.payload
    //     }
    // },
    extraReducers: builder =>
        builder
            // .addCase(getAll.fulfilled, (state, action) => {
            //     state.users = action.payload
            //     state.loading = false
            // })
            .addCase(getAllAsync.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false

            })
            .addCase(getAllAsync.pending, (state, action) => {
                state.loading = true
                console.log(state.loading)
            })

});

const {reducer:postReducer,actions:{getAll,setCurrentPost,deleteById}}=postSlice

const postActions ={
    getAll,
    setCurrentPost,
    deleteById,
    getAllAsync
}

export {
    postReducer,
    postActions
}