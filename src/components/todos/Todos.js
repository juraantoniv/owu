import React from 'react';

const Todo = ({item:{userId,title,completed}}) => {
    return (
        <div className={'box_small'}>
            <div>{userId}</div>
            <div>{title}</div>
            <div>{completed}</div>

        </div>
    );
};

export default Todo;