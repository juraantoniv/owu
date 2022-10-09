import React, {createRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions, carReducer} from "../../redax/redax-toll-kit/redax";
import Car from "../Car/Car";

import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const Cars = () => {



    const dispatch = useDispatch()

    const {cars}=useSelector(state => state.carReducer)

    useEffect(() => {
       dispatch(carActions.getAllAsync())

    },[])


    return (
        <div>

            {cars.map(car=><Car key={car.id} car={car}/>)}

        </div>
    );
};



export {
    Cars
};