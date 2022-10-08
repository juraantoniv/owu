import React from 'react';

import {useDispatch} from "react-redux";
import {postActions} from "../../redux/slices/post.slice";

const Post = ({post}) => {
    const dispatch = useDispatch();
    const {title,body,userId}=post

    return (
        <div>
            <div>{title}</div>
            <div>{body}</div>
            <button onClick={() => dispatch(postActions.setCurrentPost(post))}>getTitle</button>
            <button onClick={()=>dispatch(postActions.deleteById(userId))}>delete</button>
        </div>
    );
};

export default Post;