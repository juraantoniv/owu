import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postService} from "../../services";
import {postActions} from "../../redux/slices/post.slice";
import Post from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch()
    const {posts,error,loading}=useSelector(state => state.postReducer)

    useEffect(() => {
        // postService.getAll().then(({data})=>dispatch(postActions.getAll(data)))
        dispatch(postActions.getAllAsync())
    },[])

    return (
        <div>
            {error && <h3>Error.............</h3>}
            {loading && <h3>Loading..............</h3>}
            {posts.map(post=><Post key={post.id} post={post}/>)}

        </div>
    );
};

export {
    Posts
};