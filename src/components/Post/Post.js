import React from 'react';
import {userActions} from "../../redux";
import {useDispatch} from "react-redux";

const Post = ({post}) => {
    const dispatch = useDispatch();
    const {title,body}=post

    return (
        <div>
            <div>{title}</div>
            <div>{body}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(post))}>getTitle</button>
        </div>
    );
};

export default Post;