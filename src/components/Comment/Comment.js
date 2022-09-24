import React from 'react';

const Comment = ({item:{name,body,email}}) => {
    return (
        <div className={'box_small1'}>
            <div>{name}</div>
            <div>{body}</div>
            <div>{email}</div>

        </div>
    );
};

export default Comment;