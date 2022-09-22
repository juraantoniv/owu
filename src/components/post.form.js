import React from 'react';

const PostForm = ({post,key}) => {
    const {name,email}=post

    return (
        <div>

            <div>id:{key}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>

        </div>
    );
};

export default PostForm;