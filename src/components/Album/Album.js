import React from 'react';

const Album = ({item:{userId,title}}) => {
    return (
        <div className={'box_small'}>
            <div>{userId}</div>
            <div>{title}</div>
        </div>
    );
};

export default Album;