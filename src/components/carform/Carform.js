import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redax/redax-toll-kit/redax";

const Carform = () => {

   const {handleSubmit,register}=useForm()

    const dispatch = useDispatch()
    // const {cars}=useSelector(state => state.carReducer)

    const submit = async (data)=> {
       dispatch(carActions.postAllAsync(data))
        return data

    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>

                <input type='text' placeholder={'name'} {...register('name')}/>
                <input type='text' placeholder={'price'} {...register('price')}/>
                <input type='text' placeholder={'year'} {...register('year')}/>
                <button>Push</button>
            </form>
        </div>
    );
};

export default Carform;