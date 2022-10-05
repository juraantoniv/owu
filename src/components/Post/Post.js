import React from 'react';

const Post = ({item}) => {
    return (
        <div>
            <div>{item.title}</div>
            <div>{item.body}</div>

        </div>
    );
};

export default Post;