import React from 'react';

const PostForm = ({post}) => {
    const {userId,title,body}=post


    return (
        <div>
            <div>id:{userId}</div>
            <div>title:{title}</div>
            <div>post:{body}</div>

        </div>
    );
};

export default PostForm;