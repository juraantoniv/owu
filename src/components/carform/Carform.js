import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const Carform = () => {

   const {handleSubmit,register}=useForm()


    const submit= async (data)=> {
        const {car} = await carService.create(data)
        console.log(car)
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