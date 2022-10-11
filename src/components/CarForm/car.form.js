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
        if (car){

            setValue('model', car.model)
            setValue('price', car.price)
            setValue('year', car.year)

        }

    }, [setValue])


    const dispatch = useDispatch()

    const {cars,car}=useSelector(state => state.carReducer)





    async function submit(obj) {
            dispatch(carActions.getAllAsync(obj))
    }



    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>

                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>

                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button>{car?'Update':'Post'}</button>
            </form>

            {cars.map(car=><Car key={car.id} car={car}/>)}


        </div>
    );
};



export {
 CarForm
};