import React from 'react';

const Dog = ({dogName,dispatch}) => {
    return (
        <div>
            <div>{dogName}</div>
            <button onClick={() => dispatch({type: 'deleteCat', payload: dogName.id})}>Delete dog</button>
        </div>
    );
};

export default Dog;