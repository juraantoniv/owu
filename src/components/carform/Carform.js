import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redax/redax-toll-kit/redax";

const Carform = () => {

   const {handleSubmit,register,setValue}=useForm()

    const {car}=useSelector(state => state.carReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        if (car) {
            setValue('model', car.model)
            setValue('price', car.price)
            setValue('year', car.year)
        }
    }, [car, setValue]);

    const submit =  async (data)=> {
        if (car) {
            await dispatch(carActions.updateAllAsync({id: car.id, car: data}))
        } else {
            await dispatch(carActions.postAllAsync(data))
        }
        // reset();

    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>

                <input type='text' placeholder={'name'} {...register('model')}/>
                <input type='text' placeholder={'price'} {...register('price')}/>
                <input type='text' placeholder={'year'} {...register('year')}/>
                <button>{car ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Carform;