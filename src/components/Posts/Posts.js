import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postService, userService} from "../../services";
import {userActions} from "../../redux";

import {postActions} from "../../redux/slices/post.slice";
import Post from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch()
    const {posts}=useSelector(state => state.postReducer)

    useEffect(() => {
        postService.getAll().then(({data})=>dispatch(postActions.getAll(data)))

    },[])

    return (
        <div>

            {posts.map(post=><Post key={post.id} post={post}/>)}

        </div>
    );
};

export {
    Posts
};