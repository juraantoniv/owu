import React from 'react';

const PostForm = ({post,key}) => {
    const {name,email,body}=post

    return (
        <div>
            <div>id:{key}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>post:{body}</div>

        </div>
    );
};

export default PostForm;