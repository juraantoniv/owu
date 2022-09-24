import React from 'react';
import {Link} from "react-router-dom";
const Comment = ({item}) => {
    let {postId,name,body,email}=item

    return (
        <div className={'box_small1'}>
            <div>{name}</div>
            <Link to={'/comments/'+postId} state={{...item}}><div>{body}</div></Link>
            <div>{email}</div>

        </div>
    );
};

export default Comment;