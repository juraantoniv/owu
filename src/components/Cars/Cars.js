import React, {createRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carsService} from "../../services";
import Car from "../Car/Car";
import {carActions} from "../../redux";

const Cars = () => {
    let id = createRef();
    let model = createRef();
    let price = createRef();
    let year = createRef();

    const dispatch = useDispatch()
    const {cars}=useSelector(state => state.carReducer)

    useEffect(() => {
        carsService.getAll().then(({data})=>dispatch(carActions.getAll(data)))

    },[])

    function onSubmit() {


    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'id'} ref={id}/>
                <input type="text" name={'model'} ref={model}/>
                <input type="text" name={'price'} ref={price}/>
                <input type="text" name={'year'} ref={year}/>
                <button>Set</button>
            </form>
            {cars.map(car=><Car key={car.id} car={car}/>)}
            
        </div>
    );
};

export {
    Cars
};