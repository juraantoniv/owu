import React from 'react';
import {Link} from "react-router-dom";

const PostForm = ({post}) => {
    const {userId,title,body}=post


    return (
        <div className={'post'}>
            <div>id:{userId}</div>
            <h4>title:{title}</h4>
            <div>post:{body}</div>
        </div>
    );
};

export default PostForm;