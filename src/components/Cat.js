import React from 'react';

const Cat = ({catName,dispatch}) => {
    return (
        <div>

            <div>{catName}</div>
            <button onClick={() => dispatch({type: 'deleteCat', payload: catName.id})}>Delete cat</button>
            
        </div>
    );
};

export {Cat};