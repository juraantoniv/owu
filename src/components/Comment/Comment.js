import React from 'react';
import {Link} from "react-router-dom";
const Comment = ({item:{postId,name,body,email}}) => {
    return (
        <div className={'box_small1'}>
            <div>{name}</div>
            <Link to={'posts/'+postId}><div>{body}</div></Link>
            <div>{email}</div>

        </div>
    );
};

export default Comment;