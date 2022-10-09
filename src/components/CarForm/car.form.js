import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carsService} from "../../services";
import Car from "../Car/Car";
import {carActions as userActions, carActions as userService, carActions} from "../../redux";
import {useForm} from "react-hook-form";

const CarForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({

        mode: 'all'
    });

    useEffect(() => {
        setValue('model', 'BMW')
        setValue('price', 0)
        setValue('year', 1990)
    }, [])


    const dispatch = useDispatch()

    const {cars}=useSelector(state => state.carReducer)





    async function submit(obj) {
            dispatch(carActions.getAllAsync(obj))
    }



    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>

                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>

                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button>Save</button>
            </form>

            {cars.map(car=><Car key={car.id} car={car}/>)}


        </div>
    );
};



export {
 CarForm
};