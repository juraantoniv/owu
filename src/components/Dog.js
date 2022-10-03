import React from 'react';

const Dog = ({dogName,dispatch}) => {
    return (
        <div>
            <div>{dogName}</div>
            <button onClick={() => dispatch({type: 'deleteDog', payload: dogName.id})}>Delete dog</button>
        </div>
    );
};

export {Dog};