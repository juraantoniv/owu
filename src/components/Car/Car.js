import React from 'react';

// import {userActions} from "../../redux";
import {useDispatch} from "react-redux";
import {carActions} from "../../redax/redax-toll-kit/redax";



const Car = ({car}) => {

    const dispatch = useDispatch();
    const {id, model, price, year,photo} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=> dispatch(carActions.setCurrentUser(car))}>Update</button>
            <button onClick={()=> dispatch(carActions.deleteAllAsync(id))}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;